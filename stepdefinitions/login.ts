import { Given, When, Then } from '@cucumber/cucumber';
import { discoverCommons } from '../commons/discoverContactsCommons';
import { DiscoverPage } from '../pageobjects/discoverPage';
import { LoginPage } from "../pageobjects/loginPage";
import { helper } from '../resources/helper';

const loginPage = new LoginPage()
const discoverPageObj = new DiscoverPage()
const helperObj = new helper()
const discoverObj = new discoverCommons()
var config = require('../wdio.conf').config;
var userName;
var password="Innodata@123";


Given(/^I am logged in to (.*)$/, async (path: string) => {
    path = path.replace(/^"(.*)"$/, '$1');
    console.log("Endpoint URL : " +path)
    await loginTo(path);
    await loginPage.login(userName, password)
    await helperObj.waitForPageLoad()
});

async function loginTo(startPage?: string) {
    browser.maximizeWindow()
    browser.url(`${config.baseUrl}app/Discover/${startPage}`);
    if(startPage.match("searches")){
      userName="sonali.sinha5-1Test@agilitypr.com";
    }else if(startPage.match("targetinglists")){
      userName="SonaliSprint3-1@agilitypr.com";
    }

}

Then('Verify the Advance Targeting page PageTitle', async () => {
 await expect(browser).toHaveTitle('Test')
});

Then(/^Then enter the named field (.*)$/, async (inputValue) => {
  await discoverObj.contactSearch(browser,discoverPageObj.namedField,inputValue,"Dropdown");
  await browser.pause(1000*5)
});

Then('Click on Search button', async () => {
  await expect(discoverPageObj.searchButton).toBeDisplayed();
  await discoverPageObj.searchButton.click();
});

Then('Click on filter button', async () => {
  await expect(discoverPageObj.filterButton).toBeDisplayed();
  await discoverPageObj.filterButton.click();
});

Then('Select the filter type', async () => {
  await expect(discoverPageObj.filterType).toBeDisplayed();
  await discoverPageObj.filterType.click();
});

Then('Select the filter value', async () => {
  await expect(discoverPageObj.firstFilterValue).toBeDisplayed();
  await discoverPageObj.firstFilterValue.click();
});

Then('Click on Apply button', async () => {
  if(expect(discoverPageObj.intercom).toBeDisplayed())
  {
    await browser.switchToFrame(1);
    await discoverPageObj.intercomWriteButton.setValue("Test data");
    await discoverPageObj.intercomCloseButton.click();
  }
  await expect(discoverPageObj.applybutton).toBeDisplayed();
  await discoverPageObj.applybutton.click();
});

Then('Click on outlet profile at RHP', async () => {
  await browser.pause(1000*3)
  await discoverPageObj.outletProfileRHP.click();
});

Then('Click on Action button', async () => {
  await expect(discoverPageObj.actionButton).toBeDisplayed();
  await discoverPageObj.actionButton.click();
});

Then('Click on Cancel button', async () => {
  await expect(discoverPageObj.cancelButton).toBeDisplayed();
  await discoverPageObj.cancelButton.click();
});
