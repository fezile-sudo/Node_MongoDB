"use strict";

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var dboper = require('./operations');

var url = 'mongodb://localhost:27017/';
var dbname = 'conFusion';

function main() {
  var client, db, insertResult, docs, updateResult, updatedDocs, dropResult;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          client = new MongoClient(url);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(client.connect());

        case 4:
          console.log('Connected correctly to server');
          db = client.db(dbname);
          _context.next = 8;
          return regeneratorRuntime.awrap(db.collection("dishes").insertOne({
            name: "Vadonut",
            description: "Test"
          }));

        case 8:
          insertResult = _context.sent;
          console.log("Insert Document:\n", insertResult.insertedId);
          _context.next = 12;
          return regeneratorRuntime.awrap(db.collection("dishes").find({}).toArray());

        case 12:
          docs = _context.sent;
          console.log("Found Documents:\n", docs);
          _context.next = 16;
          return regeneratorRuntime.awrap(db.collection("dishes").updateOne({
            name: "Vadonut"
          }, {
            $set: {
              description: "Updated Test"
            }
          }));

        case 16:
          updateResult = _context.sent;
          console.log("Updated Document:\n", updateResult.modifiedCount);
          _context.next = 20;
          return regeneratorRuntime.awrap(db.collection("dishes").find({}).toArray());

        case 20:
          updatedDocs = _context.sent;
          console.log("Found Updated Documents:\n", updatedDocs);
          _context.next = 24;
          return regeneratorRuntime.awrap(db.dropCollection("dishes"));

        case 24:
          dropResult = _context.sent;
          console.log("Dropped Collection: ", dropResult);
          _context.next = 31;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 31:
          _context.prev = 31;
          _context.next = 34;
          return regeneratorRuntime.awrap(client.close());

        case 34:
          return _context.finish(31);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 28, 31, 35]]);
}

main();
//# sourceMappingURL=index.dev.js.map
