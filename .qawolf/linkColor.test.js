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

test("linkColor", async () => {
  await page.goto("localhost:3000");
  const linkColor = await page.getAttribute('[data-test-id="qa-wolf-link"]', 'class');
  expect(linkColor).toBe("Blue");
});
