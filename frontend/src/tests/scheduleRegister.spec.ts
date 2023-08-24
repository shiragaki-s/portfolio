import { test, expect } from "@playwright/test";

test.describe(() => {
  // const currentDate = new Date();
  // test("初期データのスケジュールが表示される", async ({ page }) => {
  //   await page.goto("http://127.0.0.1:5173/calendar");
  //   // await page.waitForTimeout(5000);
  //   // await page.waitForResponse("http://127.0.0.1:5173/calendar");
  //   await expect(page).toHaveScreenshot();
  //   const textContent = await page.textContent("body");
  //   await expect(textContent?.includes(`${currentDate.getMonth() + 1}月`)).toBe(
  //     true
  //   );
  //   await expect(textContent?.includes("テストA")).toBe(true);
  // });

  test("登録処理", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/calendar");
    //　ホバー
    await page.getByText("13").hover();
    // クリック
    await page.getByTestId("AddIcon").click();
    // インプット入力
    await page.getByPlaceholder("タイトル").fill("テスト面談");
    await page.getByPlaceholder("会社名").fill("株式会社テスト");
    await page.getByPlaceholder("会社公式サイト").fill("https://test.com");
    await page.getByPlaceholder("転職サイト名").fill("テストサイト");
    await page.getByPlaceholder("転職サイト URL").fill("https://testsite");
    await page.getByPlaceholder("求人内容の気になる点").fill("");
    await page.getByPlaceholder("備考欄").fill("ブラックっぽい");
    // 登録ボタン押下
    await page.getByTestId("register-button").click();
    // const textContent = await page.textContent("body");
    // await expect(textContent?.includes("テスト面談")).toBe(true);
    await expect(page.getByText(/テスト面談/)).toBeVisible();
    await expect(page).toHaveScreenshot();
    // 登録したものが反映されているか
  });
  test("編集処理", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/calendar");
    // クリック
    await page.getByText("テストA").click();
    // インプット入力
    await page.getByPlaceholder("タイトル").fill("テストB");
    await page.getByText("株式会社Mock").click();
    await page.getByRole("option").last().click();
    await page.getByText("wantedly").click();
    await page.getByRole("option").last().click();
    await page.getByPlaceholder("備考欄").fill("ホワイトっぽい");
    // 編集ボタン押下
    await page.getByTestId("register-button").click();
    // const textContent = await page.textContent("body");
    // await expect(textContent?.includes("テストB")).toBe(true);
    await expect(page.getByText(/テストB/)).toBeVisible();
    // 登録したものが反映されているか
    await expect(page).toHaveScreenshot();
  });
  test("削除処理", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/calendar");
    // クリック
    await page.getByText("テスト削除").click();
    // 削除ボタン押下
    await page.getByTestId("delete-button").click();
    // 削除されているか
    await expect(page).toHaveScreenshot();
  });
});
