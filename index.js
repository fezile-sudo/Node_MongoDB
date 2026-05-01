const { MongoClient } = require('mongodb');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db(dbname);

    const insertResult = await db.collection("dishes").insertOne({ name: "Vadonut", description: "Test" });
    console.log("Insert Document:\n", insertResult.insertedId);

    const docs = await db.collection("dishes").find({}).toArray();
    console.log("Found Documents:\n", docs);

    const updateResult = await db.collection("dishes").updateOne({ name: "Vadonut" }, { $set: { description: "Updated Test" } });
    console.log("Updated Document:\n", updateResult.modifiedCount);

    const updatedDocs = await db.collection("dishes").find({}).toArray();
    console.log("Found Updated Documents:\n", updatedDocs);

    const dropResult = await db.dropCollection("dishes");
    console.log("Dropped Collection: ", dropResult);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close(); // close only once here
  }
}


main();
