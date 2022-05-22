const express = require("express");
const router = express.Router();

const { Memory } = require("../models/memory");

router.get(`/`, async (req, res) => {
  const memories = await Memory.find();
  res.status(200).send({ success: true, memories });
});

router.post(`/`, (req, res) => {
  const { title, description } = req.body;
  const memory = new Memory({
    title,
    description,
  });
  memory
    .save()
    .then((createdMemory) => res.status(201).json(createdMemory))
    .catch((err) => res.status(500).json({ error: err, success: false }));
});

module.exports = router;
