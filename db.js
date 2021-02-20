const Pool =require('pg').Pool;

const pool= new Pool({
    user: 'postgres',
    password:'naveen450',
    host:'localhost',
    port: 5432,
    database:'movies'
});

module.exports=pool;