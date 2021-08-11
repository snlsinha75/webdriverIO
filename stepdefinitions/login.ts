import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from "../pageobjects/loginPage";

const loginPage = new LoginPage()
var config = require('../wdio.conf').config;


Given(/^I am logged in to (.*)$/, async (path: string) => {
    path = path.replace(/^"(.*)"$/, '$1');
    console.log("Endpoint URL : " +path)
    await browser.maximizeWindow()
    await browser.url(`https://webdriver.io/docs/${path}`);
});

Then('Verify the page PageTitle', async () => {
  await expect(browser).toHaveTitle('Getting Started | WebdriverIO')
});
