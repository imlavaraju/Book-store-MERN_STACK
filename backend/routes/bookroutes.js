const express = require("express");
const router = express.Router();

const bookControllers = require("../controllers/bookController");

router.post("/create/book", bookControllers.createBook);
router.get("/allbooks", bookControllers.getBooks);
router.get("/book/:id", bookControllers.getBook);
router.put("/update/book/:id", bookControllers.updateBook);
router.post("/delete/book/:id", bookControllers.deleteBook);

module.exports = router;
