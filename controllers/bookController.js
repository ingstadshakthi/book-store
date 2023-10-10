const Book = require('./../models/bookModel');

exports.getAllBooks = async (req, res) => {

    const allBooks = await Book.find().select('-__v');
    res.status(200).json({
        status: 'success',
        length: allBooks.length,
        data: allBooks
    });
}

exports.createBook = async (req, res) => {

    const newBook = new Book(req.body);
    const result = await newBook.save();
    res.status(201).json({
        message: 'new book created successfully',
        status: 'success',
        data: result
    });
}

exports.getBook = async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id).select('-__v');
    res.status(200).json({
        status: 'success',
        data: book
    });
}

exports.updateBook = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: updatedBook
    });
}

exports.deleteBook = async (req, res) => {

    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        message: 'successfully deleted'
    });
}