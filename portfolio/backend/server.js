const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const dotenv = require('dotenv'); // to make the server more secure
const taskRouter = require('./Routes/taskRouter');
dotenv.config(); // it is required
const mongoose = require('mongoose');
app.use(express.json()); // to convert into json format it is needed to work with express
const userRouter = require('./Routes/userRouter')
// Server Connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log('Connection successful !!');
    app.listen(process.env.PORT || 8000);
  })
  .catch((err) => {
    console.log('Error:', err);
  });
  // user router 
  app.use('/api/user',userRouter)
  app.use('/api/task',taskRouter)