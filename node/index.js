const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

//const connection = mysql.createConnection(config)

//const sql = `INSERT INTO people(name) values('Victor')`
//connection.query(sql)
//connection.end()


async function main(){
    //const mysql = require('mysql2')
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection(config)
    const [rows, fields] = await connection.execute('SELECT * FROM people')
    //connection.end()
    //console.log(rows)
    return rows     
} 
app.get('/', async (req, res) => {
    const result = await main()    
    res.send(result)
 }
    )

app.listen(port, ()=>{console.log('Rodando na porta '+port)})
