import { CloudCampusPage } from './app.po';

describe('cloud-campus App', () => {
  let page: CloudCampusPage;

  beforeEach(() => {
    page = new CloudCampusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
