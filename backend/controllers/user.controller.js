import { User } from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.json({ status: 200, users });
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error('id Paramater Missing');
  }
  try {
    const { name, email, password, balance } = await User.findById(id);
    console.log({ name, email, password, balance });

    res.json({ name, email, password, balance });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  if (!req.body) {
    throw new Error('Body can not be empty.');
  }
  try {
    const { name, email, password, balance } = req.body;
    console.log(name, email, password);

    const user = await User.create({
      name,
      email,
      password,
      balance,
    });

    res.json(user);
  } catch (error) {
    res.json({ status: 500, message: 'Error Creating User' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error('id Paramater Missing');
  }
  try {
    const user = await User.findByIdAndDelete(id);

    console.log(user);

    res.json(user);
  } catch (error) {
    res.json(error);
  }
};
