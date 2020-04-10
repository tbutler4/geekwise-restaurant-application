const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//looks for .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// get uri from mongo atlas dashboard
const uri = process.env.ATLAS_URI;
//parse mongodb connnection \/  && UnifiedTopology is to cancel deprication
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
//loads routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});