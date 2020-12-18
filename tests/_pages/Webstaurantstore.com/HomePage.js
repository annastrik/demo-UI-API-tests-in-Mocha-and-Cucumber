import BasePage from './BasePage';
import {expect} from 'chai';
import { pageTitles } from '../../_data/Webstaurantstore.com/resources.data';

class HomePage extends BasePage {

  get title() {
    return browser.getTitle();
  }

  get search() {
    return browser.$('//input[@id="searchval"]');
  }

  get submitSearchBtn() {
    return browser.$('//button[@type="submit"]');
  }

  category(name) {
    return browser.$(`//div/a[@title="${name}"]`);
  }

  get registerBtn() {
    return browser.$('//a[@data-testid="register-nav-link"]');
  }

  open() {
    super.open('https://www.webstaurantstore.com/');
    expect(this.title).eq(pageTitles.homePage);
    browser.maximizeWindow();
  }

  submitSearch(name) {
    this.search.setValue(name);
    super.clickElement(this.submitSearchBtn);
  }

  openCategory(name){
    super.clickElement(this.category(name));
    this.registerBtn.waitForDisplayed();
  }
}
export default new HomePage();
