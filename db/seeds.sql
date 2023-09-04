INSERT INTO department (id, name)
VALUES (1, "Retail"),
       (2, "Accounting"),
       (3, "Healthcare"),
       (4, "Software");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Customer Assistant", 18000, 1),
       (2, "Customer Service Manager", 26000, 1),
       (3, "Accounts Payable", 23000, 2),
       (4, "Accounts Team leader", 30000, 2),
       (5, "Health Care Assistant", 20000, 3),
       (6, "Care Team Leader", 27000, 3),
       (7, "Senior Developer", 50000, 4),
       (8, "Lead Developer", 75000, 4);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Tom", "Jones", 1, 2),
       (2, "Kim", "Quinn", 2, NULL),
       (3, "Rahul", "Patel", 3, 5),
       (4, "David", "Bannatyne", 3, 5),
       (5, "Ben", "Davidson", 4, NULL),
       (6, "Elliott", "McCormack", 5, 7),
       (7, "Stacey", "Slater", 6, NULL),
       (8, "Linda", "Mitchell", 7, 10),
       (9, "Harpreet", "Kaur", 7, 10),
       (10, "Hasan", "Malik", 8, NULL);