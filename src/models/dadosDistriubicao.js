const { DataTypes } = require('sequelize')
const { sequelize } = require('../instances/pg')

                            //    nome do MODEL
const dadosBistribuicao = sequelize.define('lista', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Nome: {
        type: DataTypes.STRING
    },
    E_mail: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'Teste_Lucas_TI',
    timestamps: false
})

// vai criar os dados na primeira inicialização
const init = async () => {
    await dadosBistribuicao.sync();
};

init();


module.exports.dadosBistribuicao = dadosBistribuicao