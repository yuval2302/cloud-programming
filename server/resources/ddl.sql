CREATE TABLE PRODUCT (
    ID int AUTO_INCREMENT primary key,
    NAME varchar(40) not null,
    DESCRIPTION varchar(255),
    PRICE double not null,
    QUANTITY int not null default 0
);

CREATE TABLE order (
    ID int AUTO_INCREMENT primary key,
    DATE timestamp
    TOTAL_PRICE double not null,
);