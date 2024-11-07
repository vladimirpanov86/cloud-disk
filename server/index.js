import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const app = express();
const PORT = config.get('serverPort');
const dbURL = config.get('dbURL');

const start = () => {
  try {
    mongoose.connect(dbURL)
      .then(() => console.log('Connected!'));
    app.listen(PORT, () => {
      console.log(`Server start on port ${PORT}`)
    })
  } catch (e) {
    console.error(`Somtheing is wrong ${e}`)
  }
}

start();