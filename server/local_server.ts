import { serve, Server } from "./deps.ts";

class localServer {
  runningServer: Server;
  constructor() {
    this.runningServer = serve({ port: 8000 });
  }

  async run() {
    const body = "Hello World!";
    for await (const req of this.runningServer) {
      req.respond({ body });
    }
  }

  destroy() {
    this.runningServer.close();
  }
}

export { localServer };
