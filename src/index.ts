import { Elysia, t } from "elysia";

new Elysia()
  .get("/id/:id", () => "Hello World!", {
    query: t.Object({
      name: t.String(),
    }),
    params: t.Object({
      id: t.Number(),
    }),
  })
  .listen(3000);
