import dns from "node:dns/promises";
import { MongoClient } from "mongodb";

dns.setServers(["1.1.1.1"]);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

const globalForMongo = globalThis as unknown as {
  mongoClient: MongoClient | undefined;
};

const client = globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export async function getDatabase() {
  await client.connect();

  return client.db("alyoxa_forge");
}