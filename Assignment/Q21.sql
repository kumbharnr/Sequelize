use assignment;

CREATE TABLE Customer(ID INT NOT NULL,C_Name VARCHAR(50),Location VARCHAR(50),PRIMARY KEY(ID));
CREATE TABLE ProductOrders(P_Number INT NOT NULL,ProductDescription VARCHAR(50),Cost INT,
ID INT,PRIMARY KEY(P_Number),FOREIGN KEY(ID) REFERENCES Customer(ID));

INSERT INTO Customer VALUES(1,'Navnath','Pune');
INSERT INTO Customer VALUES(2,'Varun','bengalor');
INSERT INTO Customer VALUES(3,'raj','hyd');
INSERT INTO Customer VALUES(4,'sanket','Pune');

INSERT INTO ProductOrders VALUES(1,'Mobile',10000,2);
INSERT INTO ProductOrders VALUES(2,'watch',2000,3);
INSERT INTO ProductOrders VALUES(3,'laptop',120000,4);
INSERT INTO ProductOrders VALUES(4,'AC',25000,1);

select *from Customer;

select *from ProductOrders;

select ProductOrders.ProductDescription,Customer.C_Name from ProductOrders INNER JOIN Customer ON ProductOrders.ID=Customer.ID;

