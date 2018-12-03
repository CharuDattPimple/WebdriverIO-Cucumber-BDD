import Page from './page';
class HomePage extends Page {
    /**
     * define elements
     */

    get signIn() {
        return browser.element('*=Sign In');
    }
    get signUp() {
        return browser.element('*=Sign Up');
    }
    get signInAccountBox() {
        return browser.element('//*[@class="sign-form"]');
    }
    get signUpAccountBox() {
        return browser.element('//*[@class="sign-form"]');
    }
    get weather() {
        return browser.element('=Weather');
    }
    get maps() {
        return browser.element('=Maps');
    }
    get api() {
        return browser.element('=API');
    }
    get price() {
        return browser.element('=Price');
    }
    get partners() {
        return browser.element('=Partners');
    }
    get stations() {
        return browser.element('*=Stations');
    }
    get widgets() {
        return browser.element('*=Widgets');
    }
    get blog() {
        return browser.element('*=Blog');
    }
    get celciusToggle() {
        return browser.element('#metric*=°C');
    }
    get fahrenheitToggle() {
        return browser.element('#imperial=°F');
    }
    get temperature() {
        return browser.element('//*[@id="weather-widget"]/h3');
    }



    /**
     * define or overwrite page methods
     */

    open() {
        super.open('https://openweathermap.org/')
        browser.pause(1000);
    }

    verifySignInAccountBox() {
        this.signInAccountBox.waitForVisible(1000);
        return this.signInAccountBox.isVisible();
    }
    verifySignUpAccountBox() {
        this.signUpAccountBox.waitForVisible(1000);
        return this.signUpAccountBox.isVisible();
    }
    clickOnCurrentLocationButton() {
        this.currentLocationButton.click();
    }
    getCurrentLocationCity() {
        return this.currentLocationCity.getText();
    }
}

export default new HomePage();