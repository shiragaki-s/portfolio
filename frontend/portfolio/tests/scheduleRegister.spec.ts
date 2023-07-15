import { test, expect } from "./test";
import { rest } from "msw";
import { handlers } from "../mocks/handlers";
import init_data from "../mocks/init_data.json";

test.describe.parallel("テスト", () => {
  // test("スケジュールの新規登録", async ({ page }) => {
  //   // await page.goto("http://localhost:3000/calendar");
  //   // Expect a title "to contain" a substring.
  //   // await expect(page).toHaveTitle(/Playwright/);
  //   // await page.waitForTimeout(2000);
  //   // await expect(page).toHaveScreenshot();
  // });
  test.only("should allow mocks to be overridden on a per test basis", async ({
    page,
    worker,
  }) => {
    // await worker.use(
    //   rest.get("/api/users", (_, response, context) =>
    //     response(context.delay(250), context.status(403))
    //   )
    // );
    // await worker.use(...handlers);
    await worker.use(
      rest.get("http://localhost:5001/calendar", async (_req, res, ctx) => {
        return res(ctx.status(200), ctx.delay(500), ctx.json(init_data));
      })

      // rest.get("http://localhost:3000/calendar", (_, response, context) =>
      //   response(context.delay(250), context.status(403))
      // )
    );

    await page.goto("http://localhost:3000/calendar");
    await page.waitForTimeout(10000);
    await expect(page).toHaveScreenshot();
  });
});
