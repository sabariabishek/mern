const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = new Schema(
  {
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  footer: { type: String, required: true },
  tags: { type: [String], required: true },
	type: { type: String, required: true },
	featured: { type: Boolean, required: true},
  } 
)

module.exports = mongoose.model('posts', Posts)
