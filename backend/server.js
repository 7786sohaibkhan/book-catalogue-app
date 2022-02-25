
require('dotenv').config();
const path = require('path');
const express = require('express');
const routes = require('./routes/userRoutes');
const error = require('./middlewares/errorMiddleware');
const bookRouter = require('./routes/bookRoutes');
require('./config/dbConnect')();

const app = express();

//Routes
app.use(express.json());

app.use('/api/users', routes.userRouter);
app.use('/api/books', bookRouter.bookRouter);

//users routes
app.post('/api/users/register', (req, res) => {
    res.send('Register route');
});    

app.post('/api/users/login', (req, res) => {
    res.send('login route');
});  


//server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is up and runing ${PORT}`);
});
 
//====Catch Error
app.use(error.notfoundErrorMiddleware);
app.use(error.errorMiddlewareHandler);

//End of deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



