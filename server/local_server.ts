import { Server } from "./deps.ts";

class localServer {
  runningServer: Server;
  response: string;
  port: number;
  constructor(
    response: string,
    port: number,
    makeServer: {
      (addr: string | Pick<Deno.ListenOptions, "port" | "hostname">): Server;
      (arg0: { port: number }): Server;
    },
  ) {
    this.response = response;
    this.port = port;
    this.runningServer = makeServer({ port: this.port });
  }

  async listen() {
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
