# MalWart
Front end capstone team project for MCSP-09.

DATABASE:
In order to populate the database with a table, you have to run the database.sql file then run the migration.sql file onto the database. After that you can run seed.sql to add data into the table.

Window users commands: psql -U postgres -f database/database.sql
database/migration.sql
database/seed.sql

Window users .env file: In order to get the correct request to the database you have to have the db name all lower case. DB_NAME=database

Mac users commands: psql -f database/database.sql
database/migration.sql
database/seed.sql
