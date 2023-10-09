const express = require('express');
const router = express.Router();
const { getAllBooks, createBook, updateBook, deleteBook, getBook } = require('../controllers/bookController')

router
    .get('/', getAllBooks)
    .post('/', createBook);
router
    .get('/:id', getBook)
    .put('/:id', updateBook)
    .delete('/:id', deleteBook);



module.exports = router;