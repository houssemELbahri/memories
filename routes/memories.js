const express = require("express");
const router = express.Router();

const {
  createMemory,
  getAllMemories,
  getMemory,
  deleteMemory,
  updateMemory,
} = require("../controllers/memories");

router.route("/").get(getAllMemories).post(createMemory);
router.route("/:id").get(getMemory).patch(updateMemory).delete(deleteMemory);

module.exports = router;
