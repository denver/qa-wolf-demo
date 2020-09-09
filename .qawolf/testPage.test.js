const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("testPage", async () => {
  await page.goto("localhost:3000");
  await page.click('text="Test Page"');
  await page.click("text=Home");
  await page.click('text="Test Page"');
  await page.click("text=Home");
  await page.click('text="Test Page"');
  await page.click("text=Home");
});