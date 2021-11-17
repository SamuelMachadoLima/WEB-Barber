// Arquivo de conexão com BD

var mysql = require('mysql');

var connMySQL =  function(){
    return mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "web_barber",
        port: 3306,

        multipleStatements: true
    });
}

module.exports = function(){
    return connMySQL;
}