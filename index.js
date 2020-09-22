const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const db = require('./db');
const projectRouter = require('./routes/project-routes.js')

const app = express();
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.use(express.static(path.resolve('./client/build')))

app.use('/api', projectRouter);

app.get('/api/data', (req, res) => {
    fetch('https://ninnih-portfolio.herokuapp.com/api/projects')
    .then(res => res.json())
    .then(data => { 
        res.status(200).send(data.data)
    })
})

app.post('/api/type', (req, res) => {
    const type = req.body.info;
		console.log(type, "blobben")
})

app.get('*', (req, res) => res.sendFile(path.resolve('client/build/index.html')));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))