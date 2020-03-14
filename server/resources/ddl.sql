CREATE TABLE PRODUCTS (
    id varchar(100) not null,
    name varchar(40) not null,
    description varchar(255),
    price double not null,
    quantity int not null default 0
);

CREATE TABLE ORDERS (
    id varchar(100) not null,
    date varchar(100) not null
);
