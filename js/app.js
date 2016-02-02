var app = angular.module('myApp', ['pouchdb']);

app.service('MyService', function(pouchDB) {
  var db = pouchDB('name');
});

app.controller('MyController', function($log, $scope, pouchDB) {
  var db = pouchDB('dbname');
  var doc = { name: 'Luisfer' };

  function error(err) {
    $log.error(err);
  }

  function get(res) {
    if (!res.ok) {
      return error(res);
    }
    return db.get(res.id);
  }

  function bind(res) {
    $scope.doc = res;
  }

  db.post(doc)
    .then(get)
    .then(bind)
    .catch(error);
});