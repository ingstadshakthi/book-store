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
    },
    originalPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 100
    },
    publisher: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;