let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.includes("YOUR_ACTUAL_PASSWORD")) {
    console.warn("⚠️ MONGODB_URI is not configured in .env.local");
    return null;
  }

  if (cachedDb) {
    return cachedDb;
  }

  try {
    const { MongoClient } = await import("mongodb");
    if (!cachedClient) {
      cachedClient = new MongoClient(uri);
      await cachedClient.connect();
      console.log("✅ Successfully connected to MongoDB Atlas cluster!");
    }
    cachedDb = cachedClient.db("jalcare_ro");
    return cachedDb;
  } catch (err: any) {
    console.error("⚠️ Database connection warning:", err.message);
    return null;
  }
}

export async function getBookingsCollection() {
  const db = await connectToDatabase();
  if (!db) return null;
  return db.collection("bookings");
}
