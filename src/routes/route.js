const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const bookController = require('../controllers/bookController')
const reviewController = require('../controllers/reviewController')
const middleware = require('../middleware/auth')


//user
router.post('/register', userController.registerUser);

router.post('/login', userController.login);

//-----------------------------------------------------------------------------------------------------------------

//books
router.post('/books', middleware.authenticateUser, bookController.createBook)

router.get('/books', middleware.authenticateUser, bookController.getBooks)

router.get('/books/:bookId', middleware.authenticateUser, bookController.getBooksData)

router.put('/books/:bookId', middleware.authenticateUser, bookController.updatedBook)

router.delete('/books/:bookId', middleware.authenticateUser, bookController.deleteBook)

//------------------------------------------------------------------------------------------------------------------

//review
router.post('/books/:bookId/review', reviewController.createReview)

router.put('/books/:bookId/review/:reviewId', reviewController.updateReview)

router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReview)





module.exports = router;