const puppeteer = require('puppeteer');

async function getScreenshot(website, filename) {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(website);
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: filename});
  await browser.close();
}

getScreenshot('https://google.dk', 'google.png');
