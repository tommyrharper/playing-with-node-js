// First connect to PG
const { Client } = require('pg')

// Create an instance of the client class with the correct data
const client = new Client({
  user: 'student',
  host: 'localhost',
  // Enter your database name here
  database: 'testing_node',
  password: null,
  port: 5432,
})

// This is how you connect to the database
client.connect()

// This is how you retrieve info from a table
client.query('SELECT * FROM testtable WHERE id = 1', (err, res) => {
  // 'res' is an object that contains all the data you want!
  console.log(res.rows[0].info)
})

// This is how you successfully insert information into the table
client.query("INSERT INTO testtable (info) VALUES ('new');", (err, res) => {
  // we use client.end to close the connection once we are finished using the database on this page.
  client.end()
})