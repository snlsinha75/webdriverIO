WebdriverIO Examples

Welcome to the WebdriverIO example repository. Here you can find a lot of stuff that helps you to understand how WebdriverIO works. It is separated into different topics. The best way to start is to clone the WebdriverIO repository, install its dependencies, and build it:

git clone git@github.com:snlsinha75/webdriverIO.git
cd ./webdriverIO
npm install
npm test

It will open the webdriverIO official websilte and will verify the page title.

Framework is Cucumber and generating two report files
a) Json
b) Html

Using hooks to close the browser after all script execution. 

wdio.conf.ts is the main file. Contains information like which browser you need to run and with how many instance is provided along with base url and hooks.
