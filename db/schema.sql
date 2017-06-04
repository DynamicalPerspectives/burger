CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    `id` INT (10) AUTO_INCREMENT NOT NULL
    , `burger_name` VARCHAR(30) NOT NULL
    , `devoured` BOOLEAN DEFAULT false
    , `created_date` TIMESTAMP
    , PRIMARY KEY (`id`)
);
