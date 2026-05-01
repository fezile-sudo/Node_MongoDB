const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("dishes");

    // Insert a document
    const result = await collection.insertOne({
      name: "Uthappizza",
      description: "test"
    });
    console.log("After Insert:\n");
    console.log(result);

    // Find documents
    const docs = await collection.find({}).toArray();
    console.log("Found:\n");
    console.log(docs);

    // Drop collection
    await db.dropCollection("dishes");
    console.log("Collection dropped");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
