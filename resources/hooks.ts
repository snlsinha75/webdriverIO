import { config } from "../wdio.conf";
import { After, AfterAll, Status, BeforeAll } from '@cucumber/cucumber';

After(async function (scenario) {
    const scenarioName = scenario.pickle.name;
    // if (scenario.result.status === Status.FAILED) {
    //     // screenShot is a base - 64 encoded PNG
    //     const screenShot = await browser.takeScreenshot();
    //     this.attach(screenShot, "image/png");
    //     console.log("Failed TC :" + "#" + `${scenarioName}` + "#");
    // }
    console.log('Scenario Finished ***************************************************' + `${scenarioName}`);
});

AfterAll(async function (scenario) {
    // await browser.pause(1000*5)
    // await browser.url(config.baseUrl + "Login/Signout");
    // console.log(await browser.getUrl());
    // console.log("after navigation")
    // await browser.waitUntil(async () => (await $('//button[@type="submit"]').getText()) === 'SIGN IN',
    // {timeout: 15000,timeoutMsg: 'Logging out from the application'})
    // await browser.closeWindow;
});