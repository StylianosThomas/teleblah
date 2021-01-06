const { Pool } = require("pg");

const pool = new Pool({ database: 'blogsdb'});

function run(q, values, callback){
    return pool.query(q, values, callback);
};

module.exports = { run };