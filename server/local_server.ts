import { serve, Server } from "./deps.ts";

class localServer {
  runningServer: Server;
  response: string;
  port: number;
  constructor(response: string, port: number) {
    this.response = response;
    this.port = port;
    this.runningServer = serve({ port: this.port });
  }

  async run() {
    const body = this.response;
    for await (const req of this.runningServer) {
      req.respond({ body });
    }
  }

  destroy() {
    this.runningServer.close();
  }
}

export { localServer };
