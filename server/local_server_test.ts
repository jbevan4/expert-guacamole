import { assertEquals } from "./deps.ts";
import { localServer } from "./local_server.ts";

Deno.test("can query a server", async () => {
  const ls = new localServer("Hello World!", 8000);
  ls.run();
  const request = await fetch("http://0.0.0.0:8000/");
  const response = await request.text();
  assertEquals(response, "Hello World!");
  ls.destroy();
});
