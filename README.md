# Playing with node.js, postgresql and PG

```
>psql
=# CREATE DATABASE "testing_node";
=# \c testing_node
=# CREATE TABLE testtable(id SERIAL PRIMARY KEY, info VARCHAR(60));
CREATE TABLE
=# INSERT INTO testtable (info) VALUES ('example');
````