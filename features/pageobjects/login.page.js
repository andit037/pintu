const { $ } = require('@wdio/globals')

class LoginPage{
    /**
     * define selectors using getter methods
     */
    get okButton () {
        return $('//*[contains(@resource-id, "android:id/button1")]');
    }

    get inputEmail () {
        return $('//*[contains(@resource-id, "com.loginmodule.learning:id/textInputEditTextEmail")]');
    }

    get inputPassword () {
        return $('//*[contains(@resource-id, "com.loginmodule.learning:id/textInputEditTextPassword")]');
    }

    get btnSubmit () {
        return $('//*[contains(@resource-id, "appCompatButtonLogin")]');
    }

    get btnRedirect2Login () {
        return $('//*[contains(@resource-id, "appCompatTextViewLoginLink")]');
    }

    get errorMessage () {
        return $('(//*[contains(@class, "android.widget.TextView")])[2]');
    }

    async loginOK () {
        let isExisting = await this.okButton.isExisting();
        if(isExisting){
            await this.okButton.click();
        };
    }

    async login (username,password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async loginSubmit () {
        await this.btnSubmit.click();
    }

    async redirect2Login () {
        await browser.pause(5000);
        await this.btnRedirect2Login.click();
    }
}

module.exports = new LoginPage();
