import express from 'express';
import userRouter from './routes/user.route.js';
import { connectDB } from './lib/db.js';
import morgan from 'morgan';
const app = express();

const PORT = 5000;
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRouter);

async function connect() {
  try {
    const db = await connectDB();
    if (!db) {
      throw new Error('No Connection to Database');
    }
    app.listen(PORT, () => {
      console.log(`Connected to Database ${db.modelNames()}
        Server Running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connect();
