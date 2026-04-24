const express = require("express");
const router = express.Router();
const controller = require("../controllers/noteHttpController");

router.get("/notes", controller.getAll);
router.get("/notes/:id", controller.getOne);
router.post("/notes", controller.create);
router.delete("/notes/:id", controller.remove);
router.put("/notes/:id", controller.update);

module.exports = router;
