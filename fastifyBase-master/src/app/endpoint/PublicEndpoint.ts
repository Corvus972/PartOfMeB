export default class PublicEndpoint {

    private request: any;
    private response: any;

    constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }

    get() {
        return this.response.send(200);
    }


}