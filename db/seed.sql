INSERT INTO department (name)
VALUES (
        'Human Resources'
    ), 
    (
        'Finance'
    ); 
INSERT INTO role (title, salary, department_id)
VALUES (
        'Cashier', 75000, 2
    ), 
    (
        'Human Resources Coordinator', 100000, 1
    ), 
    ( 
        'Accountant', 80000, 2
    );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Newman", "Norman",  2, 2)