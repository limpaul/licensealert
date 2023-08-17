const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = 'data/data.json';

app.get('/', (req, res)=>{
    res.send('hello!');
})

app.post('/add', (req, res)=>{
    const body = req.body;
    console.log(body);
    var result = fs.readFileSync(dataFilePath, 'utf-8');
    result = JSON.parse(result);
    console.log(typeof result)
    fs.writeFileSync(dataFilePath, JSON.stringify(body));

});
app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})