describe('Testing put', function() {

  var db;
  beforeEach(function() {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
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

  it('should wrap put', function(pouchdb) {
    var doc = {
      _id: 'Oddysey'
    };
    db.put(doc)
      .then(function (response) {
        expect(response).toBeDefined();
      }).catch(function (err) {
        console.log(err);
    })
  });


});
