import { Ng2FuzhutechSamsPage } from './app.po';

describe('ng2-fuzhutech-sams App', () => {
  let page: Ng2FuzhutechSamsPage;

  beforeEach(() => {
    page = new Ng2FuzhutechSamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
