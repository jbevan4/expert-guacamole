class Server {
  serverInitialiser: any;
  runningServer: any;

  constructor(serverInitialiser: any) {
    this.serverInitialiser = serverInitialiser;
    this.runningServer = null
  }

  async serve() {
    this.runningServer = this.serverInitialiser({ port: 8000 });
    for await (const req of this.runningServer) {
      req.respond({ body: "Hello World!" });
    }
  }

  async destroy(){
    this.runningServer.close()
  }
}

export { Server };
