import { browser, by, element } from 'protractor';
import { HomePage } from './home.po';

describe('element-mate Login', () => {
  let page: HomePage;
  beforeEach(() => {
    page = new HomePage();
  });

  it('should display the login page with 20 element posters', () => {
    page.navigateTo();
    expect(page.getElementPostersCount()).toEqual(20);
    expect(page.isFlipped()).toBeFalsy();
    page.clickOnElementPosterByIndex(5);
    expect(page.isFlipped()).toBeTruthy();
  });

});
