

export default class CatalogEndpoint {

    private request: any;
    private response: any;

    constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }

    get() {
        return this.response.status(200).send({"catalog": "rr"});
    }

    post() {
        return this.response.send(200);
    }

    put() {
        return this.response.send(200);
    }

    delete() {
        return this.response.send(200);
    }
}