import { test, expect } from "@playwright/test";

test("トップページを開く", async ({ page }) => {
  await page.goto("https://blog.myntinc.com", { waitUntil: "networkidle" });
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});