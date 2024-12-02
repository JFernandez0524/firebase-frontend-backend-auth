import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name Field Is Required.'],
  },
  email: {
    type: String,
    required: [true, 'Email required.'],
  },
  password: {
    type: String,
    required: [true, 'Password required.'],
  },
  balance: {
    type: Number,
    min: [1, `Can't Have {VALUE}, must be 1 or greater`],
    max: 2000,
  },
});

//Get a handle to DB

export const User = model('User', userSchema);
