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
    const { error, value } = userDataValidator(req.body); // from joi
    if (error) return res.send(error.details[0].message);

    const newUser = await userModel.create(req.body);

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