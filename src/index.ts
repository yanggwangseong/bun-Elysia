import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

new Elysia()
  .use(swagger())
  .get("/id/:id", () => "Hello World!", {
    query: t.Object({
      name: t.String(),
    }),
    params: t.Object({
      id: t.Number(),
    }),
  })
  .post("/countries", ({ body: country }) => country)
  .get("/error", ({ error }) => error(500, "서버 내부 에러"))
  .listen(3000);
