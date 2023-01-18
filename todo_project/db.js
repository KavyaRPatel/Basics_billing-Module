const Pool=require("pg").Pool

const pool=new Pool({
    user:"postgres",
    password:"argusadmin",
    database:"todoapp_database",
    host: "localhost",
    port:5432 
});

module.exports=pool;
