import { rest } from "msw";
import init_data from "./init_data.json";

export const handlers = [
  rest.get("http://localhost:5001/calendar", async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(init_data));
  }),

  rest.post("http://localhost:5001/calendar", async (req, res, ctx) => {
    const { id } = await req.json();
    const resId = id === -1 ? new Date().getTime() : id;
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ res: "ok", id: resId })
    );
  }),
];
