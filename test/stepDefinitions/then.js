import {
  defineSupportCode
} from 'cucumber';
import citySearchPage from '../pageobjects/city-search.page';
import homePage from '../pageobjects/home.page';
var ip = require('ip');
var where = require('node-where');

defineSupportCode(function({
  Then
}) {


  // belongs to invalid city search  feature
  Then(/^It should display "([^"]*)" instead of city$/, function(message) {
      citySearchPage.isNotFound().should.contain(message)
  });
  // belongs to invalid city search  feature
  Then(/^It should successfully returns weather details for "([^"]*)"$/, function(arg1) {
      citySearchPage.isCityName().should.contain(arg1);
      citySearchPage.cityTemp().should.be.true;
  });
  // belongs to home feature for signIn
  Then(/^It should display sign in your account box$/, function() {
      homePage.verifySignInAccountBox().should.be.true;
  });
  // belongs to home feature for signUp
  Then(/^It should display Create new account box$/, function() {
      homePage.verifySignUpAccountBox().should.be.true;
  });
  Then(/^It should display temperature in °F$/, function() {
      homePage.temperature.waitForVisible(8000);
    homePage.temperature.getText().should.contain('F');
    });
    Then(/^It should display temperature in °C$/, function() {
    homePage.temperature.waitForVisible(8000);
    homePage.temperature.getText().should.contain('C');
});

});