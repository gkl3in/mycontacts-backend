CREATE DATABASE mycontacts;

CREATE EXTENSION if not exists "uuid-ossp";

CREATE TABLE if not exists categories(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name varchar not null
);

CREATE TABLE if not exists contacts(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name varchar not null,
  email varchar UNIQUE,
  phone varchar,
  category_id UUID,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
