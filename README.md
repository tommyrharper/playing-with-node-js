# Playing with node.js, postgresql and PG

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

In app.js you will find an explanation of how to use PG with node.js to retrieve and insert data into the database.