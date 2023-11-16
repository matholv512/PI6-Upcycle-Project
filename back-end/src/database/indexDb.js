const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const conexao = new Sequelize(dbConfig);

const user = require("../api/models/userModels")
const publication = require("../api/models/publicationModels")
const comment = require("../api/models/commentModels")

try {
  conexao.authenticate();
  console.log("Conexão estabelecida!");
} catch (error) {
  console.log("Conexão não estabelecida!");
}

user.init(conexao)
publication.init(conexao)
comment.init(conexao)

user.associate(conexao.models)
publication.associate(conexao.models)
comment.associate(conexao.models)

module.exports = conexao;
