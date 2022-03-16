import EnvService from "../configuration/EnvService.js";

let sequelizeInstance: any;

export default class DatabaseConnector {
    //
    // constructor() {
    //     sequelizeInstance = new Sequelize(
    //         EnvService.get('DB_NAME', 'rm-database'),
    //         EnvService.get('DB_USER', 'postgres'),
    //         EnvService.get('DB_PWD', 'postgres'),
    //         {
    //             host: EnvService.get('DB_HOST', 'routing-manager-host'),
    //             port: EnvService.get('DB_PORT', '5432'),
    //             dialect: EnvService.get('DB_DIALECT', 'postgres')
    //         }
    //     );
    // }
    //
    // /**
    //  * Get sequelize instance
    //  * @return {Sequelize}
    //  */
    // static getSequelize() {
    //     if (!sequelizeInstance) {
    //         new DatabaseConnector();
    //     }
    //     return sequelizeInstance;
    // }
    //
    // /*
    // * test DB connection
    // */
    // static async testDBConnection() {
    //     try {
    //         await this.getSequelize().authenticate();
    //         return ('Connection has been established successfully.');
    //     } catch (error) {
    //         throw ('Unable to connect to the database: ' + error);
    //     }
    // }


}