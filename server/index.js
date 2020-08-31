const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const db = require('./db');
const projectRouter = require('./routes/project-routes.js')

const app = express();
const apiPort = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', projectRouter);

app.get('/api/data', (req, res) => {
    fetch('http://localhost:8000/api/projects')
    .then(res => res.json())
    .then(data => { 
        res.status(200).send(data.data)
    })
})

// app.post('/api/type', (req, res) => {
//     const type = req.body.info;
//     console.log(type, "blobben")
// })

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))