const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "mf8stpfgn87j6voj",
    password: "t8n07u49z6gvc26p",
    database: "h0x0yx6qtgn1jeln"
});

module.exports = pool;