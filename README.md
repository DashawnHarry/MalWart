# MalWart

## DATABASE:

In order to populate the database with a table, you have to run the database.sql file then run the migration.sql file onto the database. After that you can run seed.sql to add data into the table.

- PostgreSQL- Create a postgresql database named MalWartDB

#### Window users .env file:

- In order to get the correct request to the database you have to have the db name all lower case. DB_NAME=database

#### Window users commands:

```
- psql -U postgres -f database/migration.sql malwartdb
```

```
psql -U postgres -f database/seed.sql
```

#### Mac users commands:

```
psql -f database/migration.sql MalWartDB
```

```
psql -f database/seed.sql
```

#### Python Option:

There is a simple python file to make this process simpler. It is only for use on windows and mac machines currently.

- Note: make sure you have python 3 installed.

At the project root, run:

```
python3 setup_db.py
```

---

## Git Workflow

There is a simple python file to ease the repetitivity of switching back and forth from branches through the workflow.

- Note: make sure you have python 3 installed.

#### Git workflow steps:

```
git commit -m "<Replace with your message>"
```

```
git push
```

```
python3 git_workflow.py <The name of your feature branch>
```

---
