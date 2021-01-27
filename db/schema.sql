DROP DATABASE IF EXISTS EmployeeDB;
CREATE database EmployeeDB;

USE EmployeeDB;

CREATE TABLE Department (
  id INT Auto_Increment,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Role (
  id INT Auto_Increment,
  department_id INT, 
  salary DECIMAL (10,2),
  title VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES Department(id)
);

CREATE TABLE Employee (
  id INT Auto_Increment,
  manager_id INT,
  role_id INT,
  Last_Name VARCHAR(30) NOT NULL,
  First_Name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id) REFERENCES Employee(id),
  FOREIGN KEY (role_id) REFERENCES Role(id)
);
SELECT * FROM Employee;

