import mongoose from 'mongoose';
import 'dotenv/config';

export async function connectDB() {
  const uri = `mongodb+srv://badbank:${process.env.MONGODB_PASSWORD}@badbank.wc6srxt.mongodb.net/badBank?retryWrites=true&w=majority`;

  try {
    // Connect to the MongoDB cluster
    const db = await mongoose.connect(uri, { dbName: 'badBank' });
    // console.log(db);
    return db;

    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  }
}
