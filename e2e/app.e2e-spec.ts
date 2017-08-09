import { TodoMVCP2Page } from './app.po';

describe('todo-mvc-p2 App', () => {
  let page: TodoMVCP2Page;

  beforeEach(() => {
    page = new TodoMVCP2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
