var Sequelize = require("sequelize");
var dbConfig = require("./db.config");

var sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle

    }
});


///Q1-------------------------------------
// 1. Create a connection with the database and display the result.   Stop the DB and check and also see the error throws in sequelize.


sequelize.authenticate().then(()=>{
        console.log("connected to the databases successfully");
    }).catch(err=>{
        console.error("unable to connect"+err);
    }).finally(()=>{
        sequelize.close();
    });

///Q2----------------------------------------
// 2. Create a student table with the fields student_id, name, stream and marks.  Do not create student_id as the primary key and do not use
//    timestamp:false and freezeTable : true and observe the fields extra sequelize is going to create and also observe the name of the 
//    which is created.


let StudentTable = sequelize.define('Students',{
    Student_ID:Sequelize.INTEGER,
    StudentName:Sequelize.STRING,
    Stream:Sequelize.STRING,
    Marks:Sequelize.INTEGER
});

StudentTable.sync({force:true}).then(()=>{
    console.log("table is created ");
}).catch((err)=>{
    console.error("error is "+err);
}).finally(()=>{
    sequelize.close();
})


///Q3-----------------------------------------
// 3. Add few records to Student table and run the above code with force:true in sync() and observe what is happening to the created data
//     for the students table.


StudentTable.create({
        Student_ID:101,
        StudentName:"Navnath",
        Stream:"CS",
        Marks:90
    }).then((data)=>{
        console.log("record is inserted ....");
    }).catch((err)=>{
        console.error("error is :"+err);
    });


StudentTable.sync({force:true}).then(()=>{
    console.log("table is created ");
}).catch((err)=>{
    console.error("error is "+err);
}).finally(()=>{
    sequelize.close();
})

///Q4--------------------------------------
// Create Movie table with the fields MovieId, MovieName, Type of Movie (Comedy/Romantic/Action etc.,), Language, cast with the following
//     options 
//       (a) timestamps : false  
//       (b) freezeTableName : true
//       (c) without force:true in sync() and 
//       (d) Make MovieId as the primary key.
  
//   Observe what happens and add few records to this table and display the result by findByAll().


let MovieTable = sequelize.define('Movies',{
    Movie_ID:{
         primaryKey:true,
        type:Sequelize.INTEGER
    },
    MovieName:Sequelize.STRING,
    M_type:Sequelize.STRING,
    Language:Sequelize.STRING,
    Cost:Sequelize.INTEGER
},{
    timestamps:false,
    freezTabelName:true
});

MovieTable.sync().then(()=>{
    console.log("table is created ");
}).catch((err)=>{
    console.error("error is "+err);
}).finally(()=>{
    sequelize.close();
})

//////// INSERT INTO MovieTable VALUES();
MovieTable.bulkCreate([
        {Movie_ID:101,MovieName:"Godzilla",M_type:"Action  ",Language:"hindi",Cost:1000},
        {Movie_ID:102,MovieName:"spider man",M_type:"Sci-fi",Language:"English",Cost:1100},
        {Movie_ID:103,MovieName:"Iorn man",M_type:"sci-fi and action",Language:"telgu",Cost:900},
        {Movie_ID:104,MovieName:"eternal",M_type:"action ",Language:"hindi",Cost:1200},
        {Movie_ID:105,MovieName:"GOT ",M_type:"action and comedy",Language:"English",Cost:500},
    ]).then((data)=>{
        console.log("records is inserted ");
    }).catch((Emp
        console.error("the error is :"+ err);
    })
    
//////////SELECT MovieName FROM Movie WHERE MovieName='Mobile'
MovieTable.findAll({attributes:['MovieName','cast'],where:{MovieName:"Godzilla"},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
})


// // // SELECT * FROM Movie ORDER BY MovieName
MovieTable.findAll({order:['MovieName'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is" +err);
});


//// Q5----------------------------------------
// Create the Employee table in db with the fields EmpId, name, dept and designation.  Make EmpId as the primary key.  Add few records  
//       to this table and display the rows of the table in sequelize.  Add the flag {raw:true} in findByAll() and see the difference.


let EmployeeTable = sequelize.define('Employees',{
        EMP_ID:{
          primaryKey:true,
            type:Sequelize.INTEGER
        },
        EmpName:Sequelize.STRING,
        dept:Sequelize.STRING,
        Designation:Sequelize.STRING
    },{
        timestamps:false,
        freezTabelName:true
    });

EmployeeTable.sync().then(()=>{
    console.log("Table is Created");
}).catch((err)=>{
    console.error("error is :"+err);
}).finally(()=>{
        sequelize.close();
    })

//////// INSERT INTO EmployeeTable VALUES();
EmployeeTable.bulkCreate([
        {EMP_ID:101,EmpName:"Navnath"dept:"CS  ",Designation:"hindi"},
        {EMP_ID:102,EmpName:"Varun",dept:"CS",Designation:"English"},
        {EMP_ID:103,EmpName:"Nikhil",dept:"IT",Designation:"telgu"},
        {EMP_ID:104,EmpName:"RAj",dept:"IT ",Designation:"hindi"},
        {EMP_ID:105,EmpName:"Suraj ",dept:"IT",Designation:"English"},
    ]).then((data)=>{
        console.log("records is inserted ");
    }).catch((err)=>{
        console.error("the error is :"+ err);
    })

// //select *from EmployeeTable
EmployeeTable.findAll().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
});

EmployeeTable.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
});


// Q6------------------------------------
// 6. In extension to above code (Employee table), Also display the record by Primary Key whose empid is 1200.  Have a record in the db   
//      with empid 1200.  (Use findByPk()).



// //find by Primary key
EmployeeTable.findByPk(104).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=>{
    console.error("error is :"+err);
});

//Q7-------------------------------------------
// 7. Write a script to display all the records where name of the employee is your name.  (Add Where clause in the script.) 

//select * from EmployeeTable where EmpName = 'Navnath'
EmployeeTable.findAll({where:{EmpName:'Navnath'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
})


//Q8---------------------------------------------------------------
// 8. With Employee table, display all the employees with only fields Name and their department.



// //select Multiple records with the column name and value from the table
EmployeeTable.findAll({attributes:['EmpName','dept'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
})


// Q9-------------------------------------------------------
//   9. Add a condition to above script, display all the employees who are working in IT department


// //SELECT EmpName,dept FROM EmployeeTable WHERE dept='IT'
EmployeeTable.findAll({attributes:['EmpName','dept'],where:{dept:'IT'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);
})

// Q10 ----------------------------------------------
// 10. Count the number of rows in the employee table using findAndCountAll().
  

//SELECT COUNT(*) FROM EmployeeTable
EmployeeTable.findAndCountAll().then((data)=>{
    console.log("number of records is :"+data.count);
}).catch((err)=>{
    console.error("error is" +err);
});


// Q11 -------------------------------------------------
// 11. Display all the records sorted on employee names.
  

// // // SELECT * FROM EmployeeTable ORDER BY EmpName
EmployeeTable.findAll({order:['EmpName'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is" +err);
});


// Q12 --------------------------------------------------
// 12. Display names of Employee table using like operator in sequelize.
 

//SELECT * FROM EmployeeTable where EmpName="%th"
const Op = Sequelize.Op;
EmployeeTable.findAll({
    where:{
        EmpName:{
        [Op.like]:'%th'
    }
    },raw:true
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("error is :"+err);;
});


//Q13 -----------------------------------------------------------
//  13.  Write SQL queries for all the operations we have done till now and execute them using query() of sequelize. 

 
sequelize.query("SELECT * FROM `Employees`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT * FROM `Employees` WHERE Student_ID=103"Studentype:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT * FROM `Employees` WHERE EmpName='Navnath'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT EmpName,dept FROM `Employees` ",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT EmpName,dept FROM `Employees`WHERE dept='IT' ",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT COUNT(*) as Count_of_table_is FROM `Employees`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT * FROM `Employees` ORDER BY EmpName",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT * FROM `Employees` WHERE EmpName='Navnath'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
sequelize.query("SELECT EmpName FROM `Employees` WHERE EmpName LIKE '%th'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})


// Q14 --------------------------------------------
// 14. Write the script to  display all the students whose are in CS Stream and have got more 75%. (Use Op.and)
  

//////// INSERT INTO StudentTable VALUES();
StudentTable.bulkCreate([
        {Student_ID:106,StudentName:"Navnath",Stream:"CS  ",Marks:80},
        {Student_ID:102,StudentName:"Varun",Stream:"CS",Marks:60},
        {Student_ID:103,StudentName:"Nikhil",Stream:"IT",Marks:70},
        {Student_ID:104,StudentName:"RAj",Stream:"IT ",Marks:75},
        {Student_ID:105,StudentName:"Suraj ",Stream:"IT",Marks:65},
    ]).then((data)=>{
        console.log("records is inserted ");
    }).catch((err)=>{
        console.error("the error is :"+ err);
    })

//SELECT * FROM Students WHERE Stream='CS' AND Marks>=75

const Op = Sequelize.Op;
StudentTable.findAll({
    where:{
        [Op.and]:[{Stream:'CS'},{Marks:75}]
        // [Op.gte]:[{Marks:75}]
    },raw:true
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
});


// Q15 ---------------------------------------------------
// 15. Write a script to insert an employee into the employee table.
  

EmployeeTable.create({
            EMP_ID:108,
            EmpName:"Navnath",
            dept:"IT",
            Designation:"none"
        }).then((data)=>{
            console.log("record is inserted ....");
        }).catch((err)=>{
            console.error("error is :"+err);
        });

// Q16-----------------------------------------------
// 16. Insert a new record in employee table using build() and save().
  


let EmpObj = EmployeeTable.build({EMP_ID:107,EmpName:"cyz",dept:"IT",Designation:'gh'});
EmpObj.save();


// Q17 -------------------------------------------------------
// 17. Insrt set of records in student table using createBulk()
  


EmployeeTable.bulkCreate([
            {EMP_ID:107,EmpName:"Navnath",dept:"CS  ",Designation:"as"},
            {EMP_ID:108,EmpName:"Varun",dept:"CS",Designation:"sd"},
            {EMP_ID:109,EmpName:"Nikhil",dept:"IT",Designation:"df"},
            {EMP_ID:110,EmpName:"RAj",dept:"IT ",Designation:"cv"},
            {EMP_ID:111,EmpName:"Suraj ",dept:"IT",Designation:"rt"},
        ]).then((data)=>{
            console.log("records is inserted ");
        }).catch((err)=>{
            console.error("the error is :"+ err);
        })


// Q18 ------------------------------------------------------------
// 18. Update a record in employee table by changing your name to your full name (First name and Last name)
  


// update the data of table 
EmployeeTable.update(
    {EmpName:"Navnath Kumbhar"},
    {where:{EmpName:"Navnath"}
}
).then((data)=>{
    console.log("data is updated");
}).catch((err)=>{
    console.error("error is :"+err);
});


// Q19 -------------------------------------------------------------
// 19. Delete a record from employee table and see the output.
  

//delete record from table
EmployeeTable.destroy(
    {where :{EmpName:"Varun"}}
).then((data)=>{
    console.log("record deleted");
}).catch((err)=>{
    console.error("error is :"+err);
});


// Q20 -----------------------------------------------------------------
// 20. Drop the Student table using drop() and check the output.


//// drop the  
EmployeeTable.drop().then(()=>{
    console.log("table dropped....");
})


// Q21 ------------------------------------------------------------
//  Create two tables in SQL in workbench and establish a relationship between them as Primary Key and Foreign key. 

sequelize.query("select ProductOrders.Description,Customer.CustName from ProductOrders   INNER JOIN Customer  ON ProductOrders.ID=Customer.ID;",
  { type : sequelize.QueryTypes.SELECT }
)
.then( (data)=> {
  console.log(data);
});



// use assignment;

// CREATE TABLE Customer(ID INT NOT NULL,C_Name VARCHAR(50),Location VARCHAR(50),PRIMARY KEY(ID));
// CREATE TABLE ProductOrders(P_Number INT NOT NULL,ProductDescription VARCHAR(50),Cost INT,
// ID INT,PRIMARY KEY(P_Number),FOREIGN KEY(ID) REFERENCES Customer(ID));

// INSERT INTO Customer VALUES(1,'Navnath','Pune');
// INSERT INTO Customer VALUES(2,'Varun','bengalor');
// INSERT INTO Customer VALUES(3,'raj','hyd');
// INSERT INTO Customer VALUES(4,'sanket','Pune');

// INSERT INTO ProductOrders VALUES(1,'Mobile',10000,2);
// INSERT INTO ProductOrders VALUES(2,'watch',2000,3);
// INSERT INTO ProductOrders VALUES(3,'laptop',120000,4);
// INSERT INTO ProductOrders VALUES(4,'AC',25000,1);

// select *from Customer;

// select *from ProductOrders;

// select ProductOrders.ProductDescription,Customer.C_Name from ProductOrders INNER JOIN Customer ON ProductOrders.ID=Customer.ID;

