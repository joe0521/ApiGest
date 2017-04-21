import { ApiGestPage } from './app.po';

describe('api-gest App', () => {
  let page: ApiGestPage;

  beforeEach(() => {
    page = new ApiGestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
