CREATE DATABASE sushis_db;
USE sushis_db;

CREATE TABLE sushis
(
  id int NOT NULL AUTO_INCREMENT,
  sushi_name varchar(255) NOT NULL,
  eaten BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
