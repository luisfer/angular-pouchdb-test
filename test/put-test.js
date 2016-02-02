describe('Testing put', function() {
  var db;
  beforeEach(function() {
    var $injector = angular.injector(['ng', 'pouchdb']);
    var pouchDB = $injector.get('pouchDB');
    db = pouchDB('db');
  });

  it('should be defined', function(pouchdb) {
    db.put({
      _id: 'Oddysey',
      title: 'Antonio Pinto'
    }).then(function (response) {
      expect(response).toBeDefined();
    }).catch(function (err) {
      console.log(err);
    });
  });

  it('should wrap put', function(done) {
    var doc = {
      _id: 'Oddysey'
    };
    db.put(doc)
      .then(shouldBeOK)
      .catch(shouldNotBeCalled)
      .finally(done);
  });


});
