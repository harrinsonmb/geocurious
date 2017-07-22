import { GeocuriousPage } from './app.po';
import { browser, by, element} from 'protractor';

describe('homepage', () => {
  let page: GeocuriousPage;

  beforeEach(() => {
    page = new GeocuriousPage();
  });

  it('should redirect to gamemode view', () => {
    page.navigateTo();
    element(by.css('a[href="/gamemode"]')).click();
    expect(browser.getCurrentUrl()).toContain('/gamemode');
  });

  it('should redirect to score view', () => {
    page.navigateTo();
    element(by.css('a[href="/score"]')).click();
    expect(browser.getCurrentUrl()).toContain('/score');
  });
});
