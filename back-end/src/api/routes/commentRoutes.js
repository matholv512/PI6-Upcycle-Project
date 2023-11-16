const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");

router.get("/comment", commentControllers.indexAll);
router.post("/comment/:publication_id", commentControllers.store);
router.get("/comment/user/:user_id", commentControllers.indexByUser);
router.get("/comment/publication/:publication_id", commentControllers.indexByPublication);
router.put("/comment/:comment_id", commentControllers.update);
router.delete("/comment/:comment_id", commentControllers.delete);

module.exports = router;
