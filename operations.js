exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insertOne(document, (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        if (err) throw err;
        callback(docs);
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

