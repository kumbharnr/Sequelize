const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'trial',
    'root',
    'Navnath@1997',{
        dialect :'mysql',
        host:'localhost'
    }
);
    
    sequelize.authenticate().then(()=>{
    console.log("connection Successfull");

}).catch(error=>{
    console.log("error",error);
}).finally(()=>{
    sequelize.close();
})
