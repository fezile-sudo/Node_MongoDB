"use strict";

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var url = 'mongodb://localhost:27017/';
var dbname = 'conFusion';

function main() {
  var client, db, collection, result, docs;
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
          collection = db.collection("dishes"); // Insert a document

          _context.next = 9;
          return regeneratorRuntime.awrap(collection.insertOne({
            name: "Uthappizza",
            description: "test"
          }));

        case 9:
          result = _context.sent;
          console.log("After Insert:\n");
          console.log(result); // Find documents

          _context.next = 14;
          return regeneratorRuntime.awrap(collection.find({}).toArray());

        case 14:
          docs = _context.sent;
          console.log("Found:\n");
          console.log(docs); // Drop collection

          _context.next = 19;
          return regeneratorRuntime.awrap(db.dropCollection("dishes"));

        case 19:
          console.log("Collection dropped");
          _context.next = 25;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 25:
          _context.prev = 25;
          _context.next = 28;
          return regeneratorRuntime.awrap(client.close());

        case 28:
          return _context.finish(25);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 22, 25, 29]]);
}

main();
//# sourceMappingURL=index.dev.js.map
