import * as bcrypt from 'bcrypt';
import { userModel } from '../model/userStructure.js';
import { userDataValidator } from '../validator/validator.js';

export const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();

    res.status(200).json({
      status: "successful",
      message: "All Users",
      data: getUsers
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }

};

export const getUser = async (req, res) => {
  try {
    // console.log(req.query);
    const oneUser = await userModel.findOne(req.query);

    res.status(200).json({
      status: "success",
      message: "User found",
      data: oneUser
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    // Validate user data
    const { error, value } = userDataValidator(req.body); // from joi
    if (error) return res.send(error.details[0].message);

    // check if email exists in database prior
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create user
    const newUser = await userModel.create({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
      gender: req.body.gender,
      email: req.body.email
    });

    // response
    res.status(201).json({
      status: "successful",
      message: "User created",
      data: newUser
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export const userUpdate = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(req.query, req.body, {
      new: true,
      runValidators: true
    });

    res.status(201).json({
      status: "success",
      message: "User Updated",
      data: user
    });

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userModel.findOneAndDelete(req.query);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};