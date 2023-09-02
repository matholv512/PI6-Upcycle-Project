const Publication = require("../models/publicationModels");
const Users = require("../models/userModels");
const { update } = require("./userControllers.js");

module.exports = {
  async indexAll(req, res) {
    const publication = await Publication.findAll();
    return res.json(publication);
  },

  async indexByUser(req, res) {
    const { user_id } = req.params;
    const publicationByUser = await Users.findByPk(user_id, {
      include: {
        association: "user",
      },
    });
    if (!publicationByUser) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    } else {
      return res.json(publicationByUser);
    }
  },

  async indexByPublication(req, res) {
    const { publication_id } = req.params;
    const publicationById = await Publication.findByPk(publication_id)

    if(!publicationById) {
      return res.status(400).json({ error: "Publicação não encontrada!" });
    } else {
      return res.json(publicationById)
    }
  },

  async store(req, res) {
    const { user_id } = req.params;
    const {
      publ_title,
      publ_description,
      publ_midia,
      publ_comments,
      publ_like,
      publ_deslike,
    } = req.body;

    console.log("Dados: " + req.body);

    const user = await Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        error: "Usuário não encontrado!",
      });
    } else {
      const publication = await Publication.create({
        user_id,
        publ_title,
        publ_description,
        publ_midia,
        publ_comments,
        publ_like,
        publ_deslike,
      });
      return res.json(publication);
    }
  },

  async update(req, res) {
    const { publication_id } = req.params;
    const {
      user_id,
      publ_title,
      publ_description,
      publ_midia,
      publ_comments,
      publ_like,
      publ_deslike,
    } = req.body;

    const publication = await Publication.findByPk(publication_id);

    if (!publication) {
      return res.status(400).json({ error: "Publicação não encontrada!" });
    } else {
      await Publication.update(
        {
          user_id,
          publ_title,
          publ_description,
          publ_midia,
          publ_comments,
          publ_like,
          publ_deslike,
        },
        {
          where: {
            id: publication_id,
          },
        }
      );
      return res.status(200).send({
        status: 1,
        message: "Publicação atualizada com sucesso!",
      });
    }
  },

  async delete(req, res) {
    const { publication_id } = req.params;

    const publication = await Publication.findByPk(publication_id);
    if (!publication) {
      return res.status(400).json({ error: "Publicação não encontrada!" });
    } else {
      await Publication.destroy({
        where: {
          id: publication_id,
        },
      });
  
      return res.status(200).send({
        status: 1,
        message: "Publicação deletada com sucesso!",
        publication,
      });
    }
  },
};
