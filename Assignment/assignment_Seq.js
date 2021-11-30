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

// sequelize.authenticate().then(()=>{
//         console.log("connected to the databases successfully");
//     }).catch(err=>{
//         console.error("unable to connect"+err);
//     }).finally(()=>{
//         sequelize.close();
//     });

///Q2----------------------------------------

// let StudentTable = sequelize.define('Students',{
//     Student_ID:Sequelize.INTEGER,
//     StudentName:Sequelize.STRING,
//     Stream:Sequelize.STRING,
//     Marks:Sequelize.INTEGER
// });

// StudentTable.sync({force:true}).then(()=>{
//     console.log("table is created ");
// }).catch((err)=>{
//     console.error("error is "+err);
// }).finally(()=>{
//     sequelize.close();
// })


///Q3-----------------------------------------

// StudentTable.create({
//         Student_ID:101,
//         StudentName:"Navnath",
//         Stream:"CS",
//         Marks:90
//     }).then((data)=>{
//         console.log("record is inserted ....");
//     }).catch((err)=>{
//         console.error("error is :"+err);
//     });


// StudentTable.sync({force:true}).then(()=>{
//     console.log("table is created ");
// }).catch((err)=>{
//     console.error("error is "+err);
// }).finally(()=>{
//     sequelize.close();
// })

///Q4--------------------------------------

// let MovieTable = sequelize.define('Movies',{
//     Movie_ID:{
//          primaryKey:true,
//         type:Sequelize.INTEGER
//     },
//     MovieName:Sequelize.STRING,
//     M_type:Sequelize.STRING,
//     Language:Sequelize.STRING,
//     Cost:Sequelize.INTEGER
// },{
//     timestamps:false,
//     freezTabelName:true
// });

// MovieTable.sync().then(()=>{
//     console.log("table is created ");
// }).catch((err)=>{
//     console.error("error is "+err);
// }).finally(()=>{
//     sequelize.close();
// })

//////// INSERT INTO MovieTable VALUES();
// MovieTable.bulkCreate([
//         {Movie_ID:101,MovieName:"Godzilla",M_type:"Action  ",Language:"hindi",Cost:1000},
//         {Movie_ID:102,MovieName:"spider man",M_type:"Sci-fi",Language:"English",Cost:1100},
//         {Movie_ID:103,MovieName:"Iorn man",M_type:"sci-fi and action",Language:"telgu",Cost:900},
//         {Movie_ID:104,MovieName:"eternal",M_type:"action ",Language:"hindi",Cost:1200},
//         {Movie_ID:105,MovieName:"GOT ",M_type:"action and comedy",Language:"English",Cost:500},
//     ]).then((data)=>{
//         console.log("records is inserted ");
//     }).catch((Emp
//         console.error("the error is :"+ err);
    // })
    
//////////SELECT MovieName FROM Movie WHERE MovieName='Mobile'
// MovieTable.findAll({attributes:['MovieName','cast'],where:{MovieName:"Godzilla"},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })


// // // SELECT * FROM Movie ORDER BY MovieName
// MovieTable.findAll({order:['MovieName'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


//// Q5----------------------------------------
// let EmployeeTable = sequelize.define('Employees',{
//         EMP_ID:{
//           primaryKey:true,
//             type:Sequelize.INTEGER
//         },
//         EmpName:Sequelize.STRING,
//         dept:Sequelize.STRING,
//         Designation:Sequelize.STRING
//     },{
//         timestamps:false,
//         freezTabelName:true
//     });

// EmployeeTable.sync().then(()=>{
//     console.log("Table is Created");
// }).catch((err)=>{
//     console.error("error is :"+err);
// }).finally(()=>{
//         sequelize.close();
//     })

//////// INSERT INTO EmployeeTable VALUES();
// EmployeeTable.bulkCreate([
//         {EMP_ID:101,EmpName:"Navnath"dept:"CS  ",Designation:"hindi"},
//         {EMP_ID:102,EmpName:"Varun",dept:"CS",Designation:"English"},
//         {EMP_ID:103,EmpName:"Nikhil",dept:"IT",Designation:"telgu"},
//         {EMP_ID:104,EmpName:"RAj",dept:"IT ",Designation:"hindi"},
//         {EMP_ID:105,EmpName:"Suraj ",dept:"IT",Designation:"English"},
//     ]).then((data)=>{
//         console.log("records is inserted ");
//     }).catch((err)=>{
//         console.error("the error is :"+ err);
//     })

// //select *from EmployeeTable
// EmployeeTable.findAll().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// });

// EmployeeTable.findAll({raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


// Q6------------------------------------
// //find by Primary key
// EmployeeTable.findByPk(104).then((data)=>{
//     console.log(data.dataValues);
// }).catch((err)=>{
//     console.error("error is :"+err);
// });

//Q7-------------------------------------------

//select * from EmployeeTable where EmpName = 'Navnath'
// EmployeeTable.findAll({where:{EmpName:'Navnath'},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })


//Q8---------------------------------------------------------------

// //select Multiple records with the column name and value from the table
// EmployeeTable.findAll({attributes:['EmpName','dept'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })


// Q9-------------------------------------------------------
// //SELECT EmpName,dept FROM EmployeeTable WHERE dept='IT'
// EmployeeTable.findAll({attributes:['EmpName','dept'],where:{dept:'IT'},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })

// Q10 ----------------------------------------------

// //SELECT COUNT(*) FROM EmployeeTable
// EmployeeTable.findAndCountAll().then((data)=>{
//     console.log("number of records is :"+data.count);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


// Q11 -------------------------------------------------

// // // SELECT * FROM EmployeeTable ORDER BY EmpName
// EmployeeTable.findAll({order:['EmpName'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


// Q12 --------------------------------------------------

//SELECT * FROM EmployeeTable where EmpName="%th"
// const Op = Sequelize.Op;
// EmployeeTable.findAll({
//     where:{
//         EmpName:{
//         [Op.like]:'%th'
//     }
//     },raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);;
// });


//Q13 -----------------------------------------------------------
// sequelize.query("SELECT * FROM `Employees`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT * FROM `Employees` WHERE Student_ID=103"Studentype:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT * FROM `Employees` WHERE EmpName='Navnath'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT EmpName,dept FROM `Employees` ",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT EmpName,dept FROM `Employees`WHERE dept='IT' ",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT COUNT(*) as Count_of_table_is FROM `Employees`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT * FROM `Employees` ORDER BY EmpName",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT * FROM `Employees` WHERE EmpName='Navnath'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })
// sequelize.query("SELECT EmpName FROM `Employees` WHERE EmpName LIKE '%th'",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })


// Q14 --------------------------------------------

//////// INSERT INTO StudentTable VALUES();
// StudentTable.bulkCreate([
//         {Student_ID:106,StudentName:"Navnath",Stream:"CS  ",Marks:80},
//         {Student_ID:102,StudentName:"Varun",Stream:"CS",Marks:60},
//         {Student_ID:103,StudentName:"Nikhil",Stream:"IT",Marks:70},
//         {Student_ID:104,StudentName:"RAj",Stream:"IT ",Marks:75},
//         {Student_ID:105,StudentName:"Suraj ",Stream:"IT",Marks:65},
//     ]).then((data)=>{
//         console.log("records is inserted ");
//     }).catch((err)=>{
//         console.error("the error is :"+ err);
//     })

//SELECT * FROM Students WHERE Stream='CS' AND Marks>=75

// const Op = Sequelize.Op;
// StudentTable.findAll({
//     where:{
//         [Op.and]:[{Stream:'CS'},{Marks:75}]
//         // [Op.gte]:[{Marks:75}]
//     },raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// });


// Q15 ---------------------------------------------------
// EmployeeTable.create({
//             EMP_ID:108,
//             EmpName:"Navnath",
//             dept:"IT",
//             Designation:"none"
//         }).then((data)=>{
//             console.log("record is inserted ....");
//         }).catch((err)=>{
//             console.error("error is :"+err);
//         });

// Q16-----------------------------------------------
// let EmpObj = EmployeeTable.build({EMP_ID:107,EmpName:"cyz",dept:"IT",Designation:'gh'});
// EmpObj.save();


// Q17 -------------------------------------------------------
// EmployeeTable.bulkCreate([
//             {EMP_ID:107,EmpName:"Navnath",dept:"CS  ",Designation:"as"},
//             {EMP_ID:108,EmpName:"Varun",dept:"CS",Designation:"sd"},
//             {EMP_ID:109,EmpName:"Nikhil",dept:"IT",Designation:"df"},
//             {EMP_ID:110,EmpName:"RAj",dept:"IT ",Designation:"cv"},
//             {EMP_ID:111,EmpName:"Suraj ",dept:"IT",Designation:"rt"},
//         ]).then((data)=>{
//             console.log("records is inserted ");
//         }).catch((err)=>{
//             console.error("the error is :"+ err);
//         })


// Q18 ------------------------------------------------------------

// update the data of table 
// EmployeeTable.update(
//     {EmpName:"Navnath Kumbhar"},
//     {where:{EmpName:"Navnath"}
// }
// ).then((data)=>{
//     console.log("data is updated");
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


// Q19 -------------------------------------------------------------

//delete record from table
// EmployeeTable.destroy(
//     {where :{EmpName:"Varun"}}
// ).then((data)=>{
//     console.log("record deleted");
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


// Q20 -----------------------------------------------------------------
//// drop the  
// EmployeeTable.drop().then(()=>{
//     console.log("table dropped....");
// })


// Q21 ------------------------------------------------------------


