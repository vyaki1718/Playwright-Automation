const { test, expect } = require("@playwright/test");

test("Browser context test", async ({ browser }) => {
  //create a new browser context for each test
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName = page.locator("#username");
  const singIn = page.locator("#signInBtn");
  const cardTitle = page.locator(".card-body a");

  await userName.type("vivekp");

  await page.locator("[type=password]").type("learning");

  await singIn.click();

  await page.locator("[style*=block]").textContent();
  await expect(page.locator("[style*=block]")).toContainText(
    "Incorrect username/password."
  );

  await userName.fill("");
  await userName.fill("rahulshettyacademy");

  await Promise.all([page.waitForNavigation(), await singIn.click()]);

  //    console.log(await cardTitle.first().textContent());
  //    console.log(await cardTitle.nth(1).textContent());

  const allTitles = await cardTitle.allTextContents();

  console.log(allTitles);
});

test.only("UI Controls ", async ({ page }) => {
  //if we don't have to inject in browser context then no need explicit create it.
  //playwright create it by default

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName = page.locator("#username");
  const singIn = page.locator("#signInBtn");

  const dropdown = page.locator("select.form-control");

  await dropdown.selectOption("Consultant");

  await page.locator(".radiotextsty").last().click();

  await page.locator("#okayBtn").click();


  await expect( page.locator(".radiotextsty").last()).toBeChecked();
  await page.pause();
});
