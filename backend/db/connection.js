// Import dotenv using ES module syntax
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";

// Configure dotenv
dotenv.config();

const uri = process.env.ATLAS_URI || "";
if (!uri) {
  console.error("MongoDB connection string (ATLAS_URI) is missing");
  process.exit(1); // Exit if connection string is not provided
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Use top-level await for connecting to MongoDB
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
  process.exit(1); // Exit on error
}

let db = client.db("employees");

export default db;
