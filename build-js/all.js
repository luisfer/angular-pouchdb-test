"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="pouchdb"),angular.module("pouchdb",[]).constant("POUCHDB_METHODS",{destroy:"qify",put:"qify",post:"qify",get:"qify",remove:"qify",bulkDocs:"qify",bulkGet:"qify",allDocs:"qify",putAttachment:"qify",getAttachment:"qify",removeAttachment:"qify",query:"qify",viewCleanup:"qify",info:"qify",compact:"qify",revsDiff:"qify",changes:"eventEmitter",sync:"eventEmitter",replicate:{to:"eventEmitter",from:"eventEmitter"}}).service("pouchDBDecorators",["$q",function(e){this.qify=function(t){return function(){return e.when(t.apply(this,arguments))}},this.eventEmitter=function(t){return function(){var n=e.defer(),r=t.apply(this,arguments).on("change",function(e){return n.notify({change:e})}).on("paused",function(e){return n.notify({paused:e})}).on("active",function(e){return n.notify({active:e})}).on("denied",function(e){return n.notify({denied:e})}).on("complete",function(e){return n.resolve(e)}).on("error",function(e){return n.reject(e)});return r.$promise=n.promise,r}}}]).provider("pouchDB",["POUCHDB_METHODS",function(e){var t=this;t.methods=e,t.$get=["$window","pouchDBDecorators",function(e,n){function r(e,t,o){for(var i in t){var u=t[i];angular.isString(u)?(u=n[u],o?e[o][i]=u(e[o][i]):e[i]=u(e[i])):r(e,u,i)}return e}return function(n,o){var i=new e.PouchDB(n,o);return r(i,t.methods)}}]}]);
var app=angular.module("myApp",["pouchdb"]);app.service("MyService",function(n){n("name")}),app.controller("MyController",function(n,e,o){function r(e){n.error(e)}function t(n){return n.ok?a.get(n.id):r(n)}function c(n){e.doc=n}var a=o("dbname"),p={name:"Luisfer"};a.post(p).then(t).then(c)["catch"](r)});