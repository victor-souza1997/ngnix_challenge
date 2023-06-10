const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

async function main() {
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection(config);
  const sql = `INSERT INTO people(name) VALUES('Victor')`;
  await connection.query(sql);
  const [rows, fields] = await connection.execute('SELECT * FROM people');
  connection.end();
  return rows;
}

app.get('/', async (req, res) => {
  try {
    const result = await main();
    res.send('<h1>Full Cycle Rocks!</h1>' + JSON.stringify(result));
  } catch (error) {
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
