import { assertEquals } from "./deps.ts";
import { localServer } from "./local_server.ts";

Deno.test("can query a server", async () => {
  const ls = new localServer();
  ls.run();
  const request = await fetch("http://localhost:8000/");
  const response = await request.text();
  assertEquals(response, "Hello World!");
  ls.destroy();
});
