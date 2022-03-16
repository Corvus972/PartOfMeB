import fastify from 'fastify'
import EnvService from "./configuration/EnvService";
import PublicEndpoint from "./endpoint/PublicEndpoint";
import DatabaseConnector from "./connector/DatabaseConnector";
import CatalogEndpoint from "./endpoint/CatalogEndpoint";


export default class MainApp {

    private readonly options: { port: any; host: any };
    private server: any;
    private db: DatabaseConnector | undefined;

    /**
     * Create options instance variable & init application configuration.
     */
    constructor() {

        this.options = {
            port: EnvService.get('APP_PORT', '8080'),
            host: EnvService.get('APP_HOST', 'localhost'),
        };

    }

    /**
     * Run the API.
     */
    async run() {
        // Http server
        if (this.options) {

            // init app
            await this.initAppConfiguration();

            // init swagger
            await this.initSwagger();

            // Declare http endpoints
            await this.declareHttpEndpoints();

            // Start webserver
            await this.listen();
        }
    }


    /**
     * Listen the API.
     */
    private listen() {
        this.server.listen(
            this.options.port, (err: any, address: any) => {
                if (err) {
                    console.error(err)
                    process.exit(1)
                }
                console.log(`Server listening at ${address}`)
            });
    }


    private declareHttpEndpoints() {

        this.server.get('/health', async (request: Request, response: Response) => {
            await new PublicEndpoint(request, response).get();
        });

        this.server.get('/catalog', async (request: Request, response: Response) => {
            await new CatalogEndpoint(request, response).get();
        });

    }

    private async initAppConfiguration() {

        // server
        this.server = await fastify({
            logger: {
                file:'log.log',
                prettyPrint:
                    process.env.NODE_ENV === 'development'
                        ? {
                            translateTime: 'HH:MM:ss Z',
                            ignore: 'pid,hostname'
                        }
                        : false
            }
        });

        // database
        this.db = await new DatabaseConnector();

    }

    private initSwagger() {
        this.server.register(require('fastify-swagger'), {
            routePrefix: '/documentation',
            swagger: {
                info: {
                    title: 'Test swagger',
                    description: 'Testing the Fastify swagger API',
                    version: '0.1.0'
                },
                externalDocs: {
                    url: 'https://swagger.io',
                    description: 'Find more info here'
                },
                host: 'localhost',
                schemes: ['http'],
                consumes: ['application/json'],
                produces: ['application/json'],
                tags: [
                    { name: 'user', description: 'User related end-points' },
                    { name: 'code', description: 'Code related end-points' }
                ],
                definitions: {
                    User: {
                        type: 'object',
                        required: ['id', 'email'],
                        properties: {
                            id: { type: 'string', format: 'uuid' },
                            firstName: { type: 'string' },
                            lastName: { type: 'string' },
                            email: {type: 'string', format: 'email' }
                        }
                    }
                },
                securityDefinitions: {
                    apiKey: {
                        type: 'apiKey',
                        name: 'apiKey',
                        in: 'header'
                    }
                }
            },
            uiConfig: {
                docExpansion: 'full',
                deepLinking: false
            },
            uiHooks: {
                onRequest: function (request: Request, reply: Response, next: any) { next() },
                preHandler: function (request: Request, reply: Response, next: any) { next() }
            },
            staticCSP: true,
            transformStaticCSP: (header: Headers) => header,
            exposeRoute: true
        })
    }
}
