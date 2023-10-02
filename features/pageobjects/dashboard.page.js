const { $ } = require('@wdio/globals')

class DashboardPage{
    /**
     * define selectors using getter methods
     */
    get textName () {
        return $('(//*[contains(@resource-id, "textViewName")])[2]');
    }

    get textEmail () {
        return $('//*[contains(@resource-id, "textViewEmail")]');
    }

    get textPassword () {
        return $('//*[contains(@resource-id, "textViewPassword")]');
    }
}

module.exports = new DashboardPage();
