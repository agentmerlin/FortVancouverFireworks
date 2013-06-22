-- NOTE: THIS WILL CLEAR OUT ANY DATA PREVIOUS STORED IN THE fvf_test DB

DROP DATABASE IF EXISTS fvf_test;

CREATE DATABASE fvf_test;

USE fvf_test;

DROP TABLE IF EXISTS report;

CREATE TABLE report (
OrderNumber VARCHAR(255),
Total VARCHAR(255),
TransactionDate VARCHAR(255),
FirstName VARCHAR(255),
LastName VARCHAR(255),
quantity VARCHAR(255),
Product VARCHAR(255),
productoption VARCHAR(255),
address1 VARCHAR(255),
address2 VARCHAR(255),
city VARCHAR(255),
stateprovince VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
TicketNo VARCHAR(255),
SerialNo VARCHAR(255),
FullName VARCHAR(255),
Answer1 VARCHAR(255),
Answer2 VARCHAR(255)
);

LOAD DATA LOCAL INFILE 'C:\\inetpub\\wwwroot\\VF\\Ticket Data.csv'
INTO TABLE report
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';

-- We don't want the first line of the csv because those are the column names
DELETE FROM report
WHERE OrderNumber='OrderNumber';

DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
ticket_id VARCHAR(255),
full_name VARCHAR(255),
transaction_date DATETIME,
quantity INT,
email VARCHAR(255),
phone VARCHAR(255),
gate_id VARCHAR(255),
scan_time DATETIME
);

INSERT INTO ticket (ticket_id, full_name, transaction_date, quantity, email, phone)
SELECT TicketNo, CONCAT(FirstName, ' ', LastName), STR_TO_DATE(TransactionDate, '%m/%d/%Y %H:%i') as transaction_date, CAST(quantity AS UNSIGNED), email, phone
FROM report;

DROP TABLE IF EXISTS errors;

CREATE TABLE errors (
ticket_id VARCHAR(255),
status VARCHAR(255),
full_name VARCHAR(255),
email VARCHAR(255),
gate_id VARCHAR(255),
scan_time DATETIME
);
