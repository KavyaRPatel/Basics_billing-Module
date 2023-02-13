const {Sequelize} = require('sequelize')

const sequelize= new Sequelize ('sequel', 'postgres', 'argusadmin',{
    host: 'localhost',
    dialect: 'postgres'
})

try{
    sequelize.authenticate();
    console.log('Connection Established')
}catch (error){
    console.error("Unable to connect database: ", error)
}

module.exports =sequelize;