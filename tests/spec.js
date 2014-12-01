describe('leroy test app', function() {
  var localhost = 'http://localhost:8000/';
  var totalValue = element(by.model('buy.total'));

  beforeEach(function() {
    browser.get(localhost);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Leroy Test');
  });
});
