const express = require('express');
const app = express();
const booksRouter = require('./routes/booksRoutes');
const userRouter = require('./routes/userRoutes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./controllers/errorController');
require('dotenv').config();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("mongoDB connected"))
    .catch(() => console.log('mongoDB Connection failed'));


app.use('/api/v1/book', booksRouter);
app.use('/api/v1/user', userRouter);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(5000, console.log("Server Started"));