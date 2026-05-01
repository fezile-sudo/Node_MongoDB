"use strict";

exports.insertDocument = function (db, document, collection, callback) {
  var coll = db.collection(collection);
  coll.insertOne(document, function (err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.findDocuments = function (db, collection, callback) {
  var coll = db.collection(collection);
  coll.find({}).toArray(function (err, docs) {
    if (err) throw err;
    callback(docs);
  });
};

exports.updateDocument = function (db, document, update, collection, callback) {
  var coll = db.collection(collection);
  coll.updateOne(document, {
    $set: update
  }, null, function (err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.removeDocument = function (db, document, collection, callback) {
  var coll = db.collection(collection);
  coll.deleteOne(document, function (err, result) {
    if (err) throw err;
    callback(result);
  });
};
//# sourceMappingURL=operations.dev.js.map
