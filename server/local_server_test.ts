import { assertEquals, serve, Server } from "./deps.ts";

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

Deno.test("can query a server", async () => {
  const ls = new localServer();
  ls.run();
  const request = await fetch("http://localhost:8000/");
  const response = await request.text();
  assertEquals(response, "Hello World!");
  ls.destroy();
});
