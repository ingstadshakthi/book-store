const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        trim: true,

    },
    image: {
        type: String,
        required: true,
        trim: true,
    }
}, { versionKey: false });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;