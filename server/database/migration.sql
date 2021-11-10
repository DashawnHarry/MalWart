DROP TABLE products;

CREATE TABLE products(
    id serial NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    price int NOT NULL,
    image text NOT NULL,
    description text NOT NULL,
    review int,
    categories varchar(255) NOT NULL
);