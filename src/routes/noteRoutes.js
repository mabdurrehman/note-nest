const express = require("express");
const router = express.Router();
const controller = require("../controllers/noteHttpController");
const {
  validateCreateNote,
  validateUpdateNote,
} = require("../validators/noteValidator");

router.get("/notes", controller.getAll);
router.get("/notes/:id", controller.getOne);

router.post("/notes", validateCreateNote, controller.create);

router.put("/notes/:id", validateUpdateNote, controller.update);

router.delete("/notes/:id", controller.remove);

module.exports = router;
