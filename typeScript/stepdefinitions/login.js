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
const loginPage_1 = require("../pageobjects/loginPage");
const helper_1 = require("../resources/helper");
const loginPage = new loginPage_1.LoginPage();
const helperObj = new helper_1.helper();
const discoverObj = new discoverContactsCommons_1.discoverCommons();
var config = require('../wdio.conf').config;
var userName = "";
var password = "";
cucumber_1.Given(/^I am logged in to (.*)$/, (path) => __awaiter(void 0, void 0, void 0, function* () {
    path = path.replace(/^"(.*)"$/, '$1');
    console.log("Endpoint URL : " + path);
    yield browser.maximizeWindow();
    yield browser.url(`https://webdriver.io/docs/${path}`);
    //await loginPage.login(userName, password)
    //await helperObj.waitForPageLoad()
}));
cucumber_1.Then('Verify the page PageTitle', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(browser).toHaveTitle('Getting Started | WebdriverIO');
}));
