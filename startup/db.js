const mongoose = require('mongoose')
require('dotenv').config()

module.exports = function () {
  let db
  if (process.env.NODE_ENV === 'development') {
    db = process.env.DATABASE
  } else {
    db = process.env.DATABASE
  }
  mongoose
    .connect(
      db,
      { useCreateIndex: true, useNewUrlParser: true }
    )
    .then(() => console.log(`Database connected to ${db}...`))
    .catch(err => console.log(`Connection failure: ${err}`))
}
