import { Ng2LocalesPage } from './app.po';

describe('ng2-locales App', () => {
  let page: Ng2LocalesPage;

  beforeEach(() => {
    page = new Ng2LocalesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
