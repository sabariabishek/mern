const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Info = new Schema(
  {
  page: { type: String, required: true },
  city: { type: String, required: true },
  education: { type: [Object], required: true },
  skills: { type: [String], required: true },
  Tech: { type: [String], required: true },
  languages: { type: [String], required: true },
  interests: { type: String, required: true },
  about: { type: String, required: true },
  image: { type: String, required: true }
  } 
)

module.exports = mongoose.model('information', Info)
