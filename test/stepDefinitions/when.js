import {
  defineSupportCode
} from 'cucumber';
import citySearchPage from '../pageobjects/city-search.page';
import homePage from '../pageobjects/home.page';

defineSupportCode(function({
  When
}) {

  // belongs to invalid search feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
      citySearchPage.enterText(arg1);
      citySearchPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click on the search button$/, function() {
      citySearchPage.search();
  });

  // belongs to valid search feature
  When(/^I enter city as "([^"]*)" into the search box$/, function(arg1) {
      citySearchPage.enterText(arg1);
      citySearchPage.searchInput.getValue().should.equal(arg1);
  });

  //belongs to home feature for sign IN      
  When(/^I click on sign In$/, function() {
      homePage.signIn.waitForVisible(8000);
      homePage.signIn.click();
  });
  //belongs to home feature for sign Up
  When(/^I click on sign Up$/, function() {
      homePage.signUp.waitForVisible(8000);
      homePage.signUp.click();
  });

  //belongs to home feature for checking header texts
  When(/^Verify the header text is displayed against text inside the element$/, function() {
      homePage.weather.getText().should.equal('Weather');
      homePage.maps.getText().should.equal('Maps');
      homePage.api.getText().should.equal('API');
      homePage.price.getText().should.equal('Price');
      homePage.partners.getText().should.equal('Partners');
      homePage.stations.getText().should.equal('Stations');
      homePage.widgets.getText().should.equal('Widgets');
      homePage.blog.getText().should.equal('Blog');

  });

  // belongs to temp-measurement-unit feature
When(/^I toggle switch to °F$/, function() {
    homePage.fahrenheitToggle.click();
});
When(/^I toggle switch to °C$/, function() {
    homePage.celciusToggle.click();
});

});