const { Memory } = require("../models/memory");

const createMemory = async () => {
  try {
    const memory = await Memory.create(req.body);
    res.status(201).json({ memory });
  } catch (error) {}
};

const getMemory = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateMemory = async () => {
  try {
  } catch (error) {}
};

const getAllMemories = async () => {
  try {
  } catch (error) {}
};

const deleteMemory = async () => {
  try {
  } catch (error) {}
};

module.exports = {
  createMemory,
  getMemory,
  getAllMemories,
  updateMemory,
  deleteMemory,
};
