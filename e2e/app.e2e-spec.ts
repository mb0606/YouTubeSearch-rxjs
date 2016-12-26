import { HttpYoutubeSearchNgbookPage } from './app.po';

describe('http-youtube-search-ngbook App', function() {
  let page: HttpYoutubeSearchNgbookPage;

  beforeEach(() => {
    page = new HttpYoutubeSearchNgbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
