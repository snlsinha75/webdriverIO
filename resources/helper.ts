
export class helper {

async waitForPageLoad()
{
    browser.waitUntil(async function () {
        const state = browser.execute(function () {
          return document.readyState;
        });
        //console.log("state:" + state)
        return await state === 'complete';
      },
        {
          timeout: 60000, //60secs
          timeoutMsg: 'Oops! Check your internet connection'
    });
}
}