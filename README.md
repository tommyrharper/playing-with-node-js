# Playing with node.js, postgresql and PG

We created a very simple application to serve as an example of how to use postgresql with PG and node.js, explained below.

First you must install pg/
```
npm install pg
```

We created the an example database and table described below:

- Database name - testing_node
- Table name - testtable
- Table columns - id, info

This looks like this:

id | info
---|----
1  | sometext
2  | other text


etc.

Here is the PSQL code we used to create the database:

```
>psql
=# CREATE DATABASE "testing_node";
=# \c testing_node;
=# CREATE TABLE testtable(id SERIAL PRIMARY KEY, info VARCHAR(60));
CREATE TABLE
=# INSERT INTO testtable (info) VALUES ('example');
````

In app.js you will see an example of how to use PG with node.js to retrieve and insert data into the database.

1. First you must connect to PG.
```js
const { Client } = require('pg')
```

2. Then create an instance of the client class with the correct data.
```js
const client = new Client({
  user: 'student',
  host: 'localhost',
  database: 'testing_node',
  password: null,
  port: 5432,
})
```
3. Then connect to the database.
```js
client.connect()
```
4. Retrieve data from a table
```js
client.query('SELECT * FROM testtable WHERE id = 1', (err, res) => {
  console.log(res.rows[0].info)
  client.end()
})
```
5. Insert data into a table
```js
client.query("INSERT INTO testtable (info) VALUES ('new');", (err, res) => {
  client.end()
})
```

