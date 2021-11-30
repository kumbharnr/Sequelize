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


// defining the product table structure
let ProductTable = sequelize.define('ProductSequelize',{
    Product_ID:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    ProductName:Sequelize.STRING,
    Description:Sequelize.STRING,
    Cost:Sequelize.INTEGER
},{
    timestamps:false,
    freezeTableName:true
});

// ProductTable.sync().then(()=>{
//     console.log("table is created ");
// }).catch((err)=>{
//     console.error("error is "+err);
// }).finally(()=>{
//     sequelize.close();
// })


//create new table with deleting exiting one

// let UserSequelize = sequelize.define("UserSequelize",{
//     userID:Sequelize.STRING,
//     password:Sequelize.STRING,
//     Role:Sequelize.STRING
// },{
//     timestamps:false,
//     freezeTableName:true
// });
// UserSequelize.sync({force:true}).then(()=>{
//     console.log("table is created ");
// }).finally(()=>{
//     sequelize.close();
// })

//connection between the database and nodejs

// sequelize.authenticate().then(()=>{
//     console.log("connected to the databases successfully");
// }).catch(err=>{
//     console.error("unable to connect"+err);
// }).finally(()=>{
//     sequelize.close();
// })




// //find by Primary key
// ProductTable.findByPk(103).then((data)=>{
//     console.log(data.dataValues);
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


// //finde by PK
// //select *from ProductSequelize
// ProductTable.findAll({raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


//select * from ProductSequelize where ProductName = 'Mobile'
// ProductTable.findAll({where:{ProductName:'Mobile'},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })



// //select Multiple records with the column name and value from the table
// ProductTable.findAll({attributes:['ProductName','cost'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })


// //SELECT ProductName,Cost FROM ProductSequelize WHERE ProductName='Mobile'
// ProductTable.findAll({attributes:['ProductName','cost'],where:{ProductName:"Mobile"},raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);
// })


// //SELECT COUNT(*) FROM ProductSequelize
// ProductTable.findAndCountAll().then((data)=>{
//     console.log("number of records is :"+data.count);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


// //SELECT COUNT(*) FROM ProductSequelize WHERE ProductName='ab'
// ProductTable.findAndCountAll({where:{ProductName:'ab'}}).then((data)=>{
//     console.log("number of records is :"+data.count);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


//SORT The data
// // // SELECT * FROM ProductSequelize ORDER BY ProductName
// ProductTable.findAll({order:['ProductName'],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


// // SELECT * FROM ProductSequelize ORDER BY ProductName DESC
// ProductTable.findAll({order:[['ProductName','DESC']],raw:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is" +err);
// });


//LIKE Query matching words in the table
//SELECT * FROM ProductSequelize where ProductName="%le"
// const Op = Sequelize.Op;
// ProductTable.findAll({
//     where:{
//         ProductName:{
//         [Op.like]:'a%'
//     }
//     },raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error("error is :"+err);;
// });


// //Executing SQL query in sequelize
// sequelize.query("SELECT * FROM `ProductSequelize`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
//     console.log(data);
// })


//SELECT * FROM ProductSequelize WHERE ProductName='Mobile' OR cost=21

// const Op = Sequelize.Op;
// ProductTable.findAll({
//     where:{
//         [Op.or]:[{ProductName:'Mobiles'},{Cost:21}]
//     },raw:true
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// });


// //insert record into table 
// ProductTable.create({
//     Product_ID:108,
//     ProductName:"Mobile",
//     Description:"tp-link router",
//     Cost:100
// }).then((data)=>{
//     console.log("record is inserted ....");
// }).catch((err)=>{
//     console.error("error is :"+err);
// });


//inserting the record in the db using build() and save()

// let ProductObj = ProductTable.build({Product_ID:100,ProductName:"Watch",Description:"smart watch",Cost:3000});
// ProductObj.save();



// //inserting more than one records at time
// ProductTable.bulkCreate([
//     {Product_ID:110,ProductName:"alexa",Description:"ECHO dot ",Cost:1200},
//     {Product_ID:111,ProductName:"speaker",Description:"sony home ",Cost:1200},
//     {Product_ID:112,ProductName:"laptop",Description:"hp elitebook ",Cost:1200},
//     {Product_ID:113,ProductName:"mac",Description:"macbook pro ",Cost:1200},
//     {Product_ID:114,ProductName:"remote ",Description:"for speaker",Cost:1200},
// ]).then((data)=>{
//     console.log("records is inserted ");
// }).catch((err)=>{
//     console.error("the error is :"+ err);
// })


//update the data of table 
// ProductTable.update(
//     {ProductName:"Amazon Alexa"},
//     {where:{ProductName:"alexa"}
// }
// ).then((data)=>{
//     console.log("data is updated");
// }).catch((err)=>{
//     console.error("error is :"+err);
// });

//delete record from table
// ProductTable.destroy(
//     {where :{ProductName:"mac"}}
// ).then((data)=>{
//     console.log("deleted");
// }).catch((err)=>{
//     console.error("error is :"+err);
// });

//// drop the product 
// ProductTable.drop().then(()=>{
//     console.log("table dropped....");
// })