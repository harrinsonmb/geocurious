import { GeocuriousPage } from './app.po';

describe('geocurious App', () => {
  let page: GeocuriousPage;

  beforeEach(() => {
    page = new GeocuriousPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
