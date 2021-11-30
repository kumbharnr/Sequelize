var mysql2 = require("mysql2");
var con = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Navnath@1997",
    database:"trial"
});

con.connect(function(err){
    if(err) throw err;
        console.log("Connected");
})
// var sql1 = "CREATE TABLE Products(names varchar(255),id int primary key)"
// // sql1.sync({force:true}).then(()=>{
// con.query(sql1,function(err,result){
//     if(err) throw err;
//         console.log("table created");
// })
var sql = "INSERT INTO Products values('navnath',15)";
con.query(sql,function(err,results){
    if (err) throw err;
        console.log("inserted");
})
con.query("SELECT * FROM Products",function(err,result,fields){
    if(err) throw err;
        console.log((result));
})