import { rest } from "msw";
import init_data from "./init_data.json";
import dayjs from "dayjs";

export const handlers = [
  // rest.get("http://localhost:5001/calendar", async (_req, res, ctx) => {
  rest.get("http://localhost:5001/calendar", async (_req, res, ctx) => {
    init_data.schedules[0].date = dayjs().format("YYYY-MM-DD");
    return res(ctx.status(200), ctx.delay(500), ctx.json(init_data));
  }),

  rest.post("http://localhost:5001/calendar", async (req, res, ctx) => {
    const { id } = await req.json();
    const resId = id === -1 ? 100 : id;
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({ res: "ok", id: resId })
    );
  }),
];
