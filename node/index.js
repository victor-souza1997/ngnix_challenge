const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Victor')`
connection.query(sql)
connection.end()


app.get('/', (req, res) => {
    const mysql = require('mysql2')
    const connection = mysql.createConnection(config)
    var result;
    var result = await connection.query('SELECT * FROM people', (err, rows, fields) => {
        if (err) throw err
        result = rows;
        console.log('The solution is: ', result[0].name)
      })
    connection.end()
    console.log(result)
    
    res.send('hello'
    //res.send('<h1>Full Cycle</h1><h2>hello</h2>'
    )
 }
    )

app.listen(port, ()=>{console.log('Rodando na porta '+port)})
