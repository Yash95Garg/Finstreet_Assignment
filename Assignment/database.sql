CREATE DATABASE wazirx;
--\c into wazirx

CREATE TABLE wazirx(
    name VARCHAR(15) PRIMARY KEY,
    last VARCHAR(15) NOT NULL,
    buy  VARCHAR(15) NOT NULL,
    sell VARCHAR(15) NOT NULL,
    volume VARCHAR(15) NOT NULL,
    base_unit VARCHAR(10) NOT NULL
)