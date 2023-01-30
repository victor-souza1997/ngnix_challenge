const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};




async function main(){
    //const mysql = require('mysql2')
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('Victor')`
    connection.query(sql)
    const [rows, fields] = await connection.execute('SELECT * FROM people')
    //connection.end()
    //console.log(rows)
    return rows     
} 
app.get('/', async (req, res) => {
    const result = await main()    
    res.send('<h1>Full Cycle Rocks!</h1>'+JSON.stringify(result))
   
 }
    )

app.listen(port, ()=>{console.log('Rodando na porta '+port)})
