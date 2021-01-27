-- Creates new rows containing data in all named columns --
INSERT INTO Department (name)
VALUES("Human Resources");

INSERT INTO Department (name)
VALUES("Finance");

INSERT INTO Role(title, salary, department_id)
VALUES ("Human Resource Coordinator", 75000, 1)
VALUES("Accountant", 50000, 2)
VALUES("Cashier", 25000, 2)

INSERT INTO Role (name)
VALUES ("Human Resource Coordinator");

INSERT INTO Role (name)
VALUES ("Accountant");

INSERT INTO Role (name)
VALUES ("Cashier");
