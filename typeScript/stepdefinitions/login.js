"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const discoverContactsCommons_1 = require("../commons/discoverContactsCommons");
const discoverPage_1 = require("../pageobjects/discoverPage");
const loginPage_1 = require("../pageobjects/loginPage");
const helper_1 = require("../resources/helper");
const loginPage = new loginPage_1.LoginPage();
const discoverPageObj = new discoverPage_1.DiscoverPage();
const helperObj = new helper_1.helper();
const discoverObj = new discoverContactsCommons_1.discoverCommons();
var config = require('../wdio.conf').config;
var userName;
var password = "Innodata@123";
cucumber_1.Given(/^I am logged in to (.*)$/, (path) => __awaiter(void 0, void 0, void 0, function* () {
    path = path.replace(/^"(.*)"$/, '$1');
    console.log("Endpoint URL : " + path);
    yield loginTo(path);
    yield loginPage.login(userName, password);
    yield helperObj.waitForPageLoad();
}));
function loginTo(startPage) {
    return __awaiter(this, void 0, void 0, function* () {
        browser.maximizeWindow();
        browser.url(`${config.baseUrl}app/Discover/${startPage}`);
        if (startPage.match("searches")) {
            userName = "sonali.sinha5-1Test@agilitypr.com";
        }
        else if (startPage.match("targetinglists")) {
            userName = "SonaliSprint3-1@agilitypr.com";
        }
    });
}
cucumber_1.Then('Verify the Advance Targeting page PageTitle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(browser).toHaveTitle('Test');
}));
cucumber_1.Then(/^Then enter the named field (.*)$/, (inputValue) => __awaiter(void 0, void 0, void 0, function* () {
    yield discoverObj.contactSearch(browser, discoverPageObj.namedField, inputValue, "Dropdown");
    yield browser.pause(1000 * 5);
}));
cucumber_1.Then('Click on Search button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.searchButton).toBeDisplayed();
    yield discoverPageObj.searchButton.click();
}));
cucumber_1.Then('Click on filter button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.filterButton).toBeDisplayed();
    yield discoverPageObj.filterButton.click();
}));
cucumber_1.Then('Select the filter type', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.filterType).toBeDisplayed();
    yield discoverPageObj.filterType.click();
}));
cucumber_1.Then('Select the filter value', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.firstFilterValue).toBeDisplayed();
    yield discoverPageObj.firstFilterValue.click();
}));
cucumber_1.Then('Click on Apply button', () => __awaiter(void 0, void 0, void 0, function* () {
    if (expect(discoverPageObj.intercom).toBeDisplayed()) {
        yield browser.switchToFrame(1);
        yield discoverPageObj.intercomWriteButton.setValue("Test data");
        yield discoverPageObj.intercomCloseButton.click();
    }
    yield expect(discoverPageObj.applybutton).toBeDisplayed();
    yield discoverPageObj.applybutton.click();
}));
cucumber_1.Then('Click on outlet profile at RHP', () => __awaiter(void 0, void 0, void 0, function* () {
    yield browser.pause(1000 * 3);
    yield discoverPageObj.outletProfileRHP.click();
}));
cucumber_1.Then('Click on Action button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.actionButton).toBeDisplayed();
    yield discoverPageObj.actionButton.click();
}));
cucumber_1.Then('Click on Cancel button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(discoverPageObj.cancelButton).toBeDisplayed();
    yield discoverPageObj.cancelButton.click();
}));
