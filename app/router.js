const { Router } = require("express");
const controller = require("./controllers/controller.js");
const checks = require("./middlewares/checks.js");

const router = Router();

router.get("/ping", controller.ping).get("/posts", checks, controller.posts);

module.exports = router;
