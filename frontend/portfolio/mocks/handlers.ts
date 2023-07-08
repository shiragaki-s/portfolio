import { rest } from "msw";
import init_data from "./init_data.json";

export const handlers = [
  rest.get("http://localhost:5001/calendar", async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(init_data));
  }),
];
