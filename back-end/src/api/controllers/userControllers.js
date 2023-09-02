const Users = require("../models/userModels");

module.exports = {
  async indexAll(req, res) {
    const users = await Users.findAll();
    return res.json(users);
  },

  async index(req, res) {
    const { user_id } = req.params;
    const users = await Users.findByPk(user_id);
    if(!users) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    } else {
      return res.json(users);
    } 
  },

  async store(req, res) {
    const { user_name, user_email, user_password } = req.body;
    const user = await Users.create({
      user_name,
      user_email,
      user_password
    });
    return res.status(200).send({
      status: 1,
      message: "Usuário cadastrado com sucesso!",
      user,
    });
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { user_name, user_email, user_password } = req.body;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    } else {
      await Users.update(
        {
          user_name,
          user_email,
          user_password
        },
        {
          where: {
            id: user_id,
          },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Usuário atualizado com sucesso!",
      });
    }
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    } else {
      await Users.destroy({
        where: {
          id: user_id,
        },
      });
      return res.status(200).json({ messege: "Usuário excluído com sucesso!"})
    }
  },
};
