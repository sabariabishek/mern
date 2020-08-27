const mongoose = require('mongoose');
const psw = require('./psw.js');

const dbname = 'new';
const password = psw;
const uri = `mongodb+srv://ninni:${password}@cluster0.vgdky.azure.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const devuri = 'mongodb://127.0.0.1:27017/new'
mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection;
console.log(db)

module.exports = db;