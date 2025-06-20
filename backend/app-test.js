const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 80;

app.use(cors());

let questions = [
    { id: 1,
        text: 'aaaaa',
    },
    {
        id: 2,
        text: 'bbbb'
    }
];


//確認用
app.get('/questions', (req, res) => {
    res.json(questions);
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
