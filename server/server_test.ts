import { assertEquals, serve } from "./deps.ts";
import { Server } from "./server.ts";

Deno.test("can query a server", async () => {
  const server = new Server(serve);
  server.serve();

  const request = await fetch("http://localhost:8000/");
  const response = await request.text();
  assertEquals(response, "Hello World!");

  await server.destroy()

});
