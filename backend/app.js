const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3001;
const dotenv = require('dotenv')

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQL_PASSWORD='Dunks012',
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
  console.log(`Server running on http://localhost:${port}`);
});
