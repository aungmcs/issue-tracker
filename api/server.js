const express = require('express');
require('dotenv').config();
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

const app = express();

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

// ---------- Connect to database and Initialize Express server -------------

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log('Error: ', err);
  }
}());