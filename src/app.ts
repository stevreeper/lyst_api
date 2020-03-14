import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
    app: express.Application;
    port:number;

    constructor(controllers: any, port: any) {
        this.app = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    private initializeMiddleware() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        })
    }
}

export default App;
