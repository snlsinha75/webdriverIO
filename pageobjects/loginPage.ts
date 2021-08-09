export class LoginPage {

    get inputUsername () { 
        return $('//input[@id="Email"]') 
    }
    get inputPassword () { 
        return $('//input[@id="Password"]') 
    }
    get btnSubmit () { 
        return $('//button[@type="submit"]') 
    }

    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(1000*15)
    }
}