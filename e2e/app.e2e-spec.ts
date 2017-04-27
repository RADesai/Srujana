import { SrujanaPage } from './app.po';

describe('srujana App', () => {
  let page: SrujanaPage;

  beforeEach(() => {
    page = new SrujanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
