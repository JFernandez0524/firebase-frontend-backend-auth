import mongoose from 'mongoose';

export async function connectDB() {
  const uri = `mongodb+srv://badbank:josfer123@badbank.wc6srxt.mongodb.net/badBank?retryWrites=true&w=majority`;

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
