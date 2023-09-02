const express = require("express");
const router = express.Router();

const publicationControllers = require("../controllers/publicationControllers");

router.get("/publication", publicationControllers.indexAll);

router.post("/publication/:user_id", publicationControllers.store);

router.get("/publication/user/:user_id", publicationControllers.indexByUser);

router.get("/publication/:publication_id", publicationControllers.indexByPublication);

router.put("/publication/:publication_id", publicationControllers.update);

router.delete("/publication/:publication_id", publicationControllers.delete);

module.exports = router;