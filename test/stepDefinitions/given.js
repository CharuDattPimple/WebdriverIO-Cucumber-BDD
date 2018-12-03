import {
  defineSupportCode
} from 'cucumber';
import citySearchPage from '../pageobjects/city-search.page';
import homePage from '../pageobjects/home.page';

defineSupportCode(function({
  Given
}) {

  Given(/^I open the url$/, function() {
      citySearchPage.open();
      browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
  });

});