INSERT INTO department (name)
VALUES ('Kitchen'), ('Engineering'), ('Cecconis'), ('Beach');

INSERT INTO roles (title, salary, department_id)
VALUES ('Chef', '100000', '1'),('Cook', '60000', '1'), ('Lead Engineer', '150000', '2'), ('Engineer', '70000', '2'),('Cecconis Manager', '160000', '3'), ('Waiter', '90000', '3'),('Beach Manager', '170000', '4'), ('Beach attendant', '600000', '4');

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Sergio', 'Siagala','1',NULL),('Fabrizio', 'Paganelli', '2', '1'), ('Yosvany', 'Rodriguez', '3', NULL), ('Mauricio', 'Fernandez', '4','3'), ('Danielle', 'Ponz', '5', NULL), ('Francesca', 'Rossi', '6', '5'),('christina', 'Anstead', '7', NULL), ('Juseph', 'Quinn', '8', '7')
