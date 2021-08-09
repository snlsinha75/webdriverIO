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
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        const scenarioName = scenario.pickle.name;
        // if (scenario.result.status === Status.FAILED) {
        //     // screenShot is a base - 64 encoded PNG
        //     const screenShot = await browser.takeScreenshot();
        //     this.attach(screenShot, "image/png");
        //     console.log("Failed TC :" + "#" + `${scenarioName}` + "#");
        // }
        console.log('Scenario Finished ***************************************************' + `${scenarioName}`);
    });
});
cucumber_1.AfterAll(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // await browser.pause(1000*5)
        // await browser.url(config.baseUrl + "Login/Signout");
        // console.log(await browser.getUrl());
        // console.log("after navigation")
        // await browser.waitUntil(async () => (await $('//button[@type="submit"]').getText()) === 'SIGN IN',
        // {timeout: 15000,timeoutMsg: 'Logging out from the application'})
        // await browser.closeWindow;
    });
});
