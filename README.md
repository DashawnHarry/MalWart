# MalWart

## DATABASE:

In order to populate the database with a table, you have to run the database.sql file then run the migration.sql file onto the database. After that you can run seed.sql to add data into the table.

- PostgreSQL- Create a postgresql database named MalWartDB

#### Window users .env file:

- In order to get the correct request to the database you have to have the db name all lower case. DB_NAME=database

#### Window users commands:

```
psql -U postgres -f server/database/migration.sql malwartdb
```

```
psql -U postgres -f server/database/seed.sql malwartdb
```

#### Mac users commands:

```
psql -f server/database/migration.sql MalWartDB
```

```
psql -f server/database/seed.sql MalWartDB
```

#### Script Option:

There is a simple javascript file to make this process simpler. It is only for use on windows and mac machines currently.

At the project root, run:

```
node dbsetup.js
```

---

## Git Workflow

There is a simple javascript file to ease the repetitivity of switching back and forth from branches through the workflow.

#### Git workflow steps:

```
git commit -m "<Replace with your message>"
```

```
git push
```

```
node git.js <The name of your feature branch>
```

---
