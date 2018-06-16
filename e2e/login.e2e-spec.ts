import { browser } from 'protractor';
import { LoginPage } from './login.po';
import { ElementDBPage } from './elementdb.po';

describe('element-mate Login', () => {
  let page: LoginPage;
  let elementDBPage: ElementDBPage;
  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display the login page with a login button', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });

  // it('should click the login button and navigate to elementdb', () => {
  //   page.navigateTo();
  //   expect(page.getLoadingSpinner().isPresent()).toBeFalsy();
  //   page.clickLoginButton();
  //   expect(browser.getCurrentUrl()).toContain('https://www.theelementdb.org/authenticate/');
  // });

  // it('it should login and redirect back to app', () => {
  //   page.navigateTo();
  //   expect(page.getLoadingSpinner().isPresent()).toBeFalsy();
  //   page.clickLoginButton();
  //   expect(browser.getCurrentUrl()).toContain('https://www.theelementdb.org/authenticate/');
  //   browser.ignoreSynchronization = true;
  //   elementDBPage = new ElementDBPage();
  //   elementDBPage.clickLoginButton();
  //   elementDBPage.enterCredentials();
  //   expect(browser.getCurrentUrl()).toContain('https://www.theelementdb.org/authenticate/');
  //   elementDBPage.clickAllowButton();
  //   expect(browser.getCurrentUrl()).toContain('login?request_token');
  //   browser.ignoreSynchronization = false;
  // });
});
