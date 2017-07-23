import { GeocuriousPage } from './app.po';
import { browser, by, element} from 'protractor';

describe('gamemode', () => {
  let page: GeocuriousPage;

  beforeEach(() => {
    page = new GeocuriousPage();
  });

  it('should return to home if back', () => {
    page.navigateTo();
    browser.navigate().back();
    expect(browser.getCurrentUrl()).toContain('/home');
  });
});
