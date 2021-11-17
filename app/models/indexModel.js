function PaginaInicial(connection) {
    this._connection = connection;
}

PaginaInicial.prototype.CarregarPaginaInicial = function (callback) {
    this._connection.query(`SELECT * FROM cliente`, callback);
};

PaginaInicial.prototype.Autenticar = function (dados, callback) {
    if(dados.tipoUser == 1)
        this._connection.query(`SELECT * FROM cliente WHERE (CPF = '${dados.documento}') AND (Senha = '${dados.pass}')`, callback);
    else if(dados.tipoUser == 0)
        this._connection.query(`SELECT * FROM barbearia WHERE (CNPJ = '${dados.documento}') AND (Senha = '${dados.pass}')`, callback);
};

module.exports = function () {
    return PaginaInicial;
}