const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const loginControllers = require("../controllers/loginControllers");

router.get("/user", userControllers.indexAll);

router.post("/user", userControllers.store);

router.post("/login", loginControllers.login);

router.get("/user/:user_id", userControllers.index);

router.put("/user/:user_id", userControllers.update);

router.delete("/user/:user_id", userControllers.delete);

module.exports = router;
