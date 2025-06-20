const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = 3000;
const dotenv = require('dotenv')
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '10.0.2.217',
  user: 'root',
<<<<<<< HEAD
  password: MYSQL_PASSWORD=process.env.MYSQL_PASSWORD,
=======
  password: process.env.MYSQL_PASSWORD,
>>>>>>> 078e928 (デプロイ)
  database: 'idol_profile'
});

//確認用
app.get('/', (req, res) => {
  db.query('SELECT * FROM questions', (err, result) => {
    res.json(result);
  });
});


app.get('/questions', (req, res) => {
  db.query('SELECT * FROM questions ORDER BY created_at DESC', (err, results) => {
    res.json(results);
  });
});

app.post('/questions', (req, res) => {
  const { content } = req.body;
  db.query('INSERT INTO questions (content) VALUES (?)', [content], (err, result) => {
    res.json({ success: true });
  });
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM questions WHERE id = ?', [id], (err, result) => {
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://10.0.2.217/${port}`);
});
