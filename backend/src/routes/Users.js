const express = require("express");
const router = express.Router();
const controller = require("../controller/user-controllers");

router.get("/", controller.getUser);
router.post("/", controller.addUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
