import { PwaA2Page } from './app.po';

describe('pwa-a2 App', () => {
  let page: PwaA2Page;

  beforeEach(() => {
    page = new PwaA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
