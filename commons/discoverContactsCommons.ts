import { config } from "../wdio.conf";

//const allowedInputTypes = ["Checkbox","Dropdown","Text"]

export class discoverCommons {

async contactSearch(browser, Element, InputValue:string, Type:string) {
    if(Type=="Text")
    {
        await Element.setValue(InputValue);
        await browser.pause(3000);
        await browser.keys('Enter');

    }else if(Type=="Dropdown")
    {
        await Element.setValue(InputValue);
        await browser.pause(3000);
        await browser.keys('Down arrow');
        await browser.keys('Enter');

    }else{
        await Element.click();
    }

  }
}