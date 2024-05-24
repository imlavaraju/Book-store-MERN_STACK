const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const { bookname, author_name, description, published_year } = req.body;
    const book = new Book({
      bookname,
      author_name,
      description,
      published_year,
    });

    await book.save();
    res.status(201).json(book);
    console.log("created book");
  } catch (err) {
    res.status(500).json(err);
    console.log("created book");
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(201).json(books);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(202).json(book);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { bookname, author_name, description, published_year } = req.body;
    const mybook = await Book.findByIdAndUpdate(id, {
      bookname,
      author_name,
      description,
      published_year,
    });
    if (!mybook) {
      res.status(541).json("Book not found");
    }
    res.status(201).json(mybook);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletebook = await Book.findByIdAndDelete(id);
    res.status(200).send("succesfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };
