require('dotenv').config();

const { config } = require('dotenv');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});