const Comment = require("../models/commentModels.js");
const Users = require("../models/userModels");
const Publication = require("../models/publicationModels.js");

module.exports = {
  async indexAll(req, res) {
    const comment = await Comment.findAll();
    return res.json(comment);
  },

  async indexByUser(req, res) {
    const { user_id } = req.params;
  
    try {
      const commentsByUser = await Comment.findAll({
        where: { user_id },
        include: [
          {
            model: Users,
            as: "user",
          },
        ],
      });
  
      if (!commentsByUser || commentsByUser.length === 0) {
        return res.status(404).json({ error: "Nenhum comentário encontrado para este usuário." });
      }
  
      return res.json(commentsByUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async indexByPublication(req, res) {
    const { publication_id } = req.params;
  
    try {
      const commentsByPublication = await Comment.findAll({
        where: { publication_id },
        include: [
          {
            model: Users,
            as: "user",
          },
        ],
      });
  
      if (!commentsByPublication || commentsByPublication.length === 0) {
        return res.status(404).json({ error: "Nenhum comentário encontrado para esta publicação." });
      }
  
      return res.json(commentsByPublication);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async store(req, res) {
    const { publication_id } = req.params;
    const {
      user_id,
      comment
    } = req.body;

    console.log("Dados: " + req.body);

    const publication = await Publication.findByPk(publication_id);

    if (!publication) {
      return res.status(400).json({
        error: "Publicação não encontrada!",
      });
    } else {
      const publication = await Comment.create({
        user_id,
        publication_id,
        comment
      });
      return res.json(publication);
    }
  },

  async update(req, res) {
    const { comment_id } = req.params;
    const { user_id, comment } = req.body;
  
    try {
      const existingComment = await Comment.findByPk(comment_id);
  
      if (!existingComment) {
        return res.status(404).json({ error: "Comentário não encontrado!" });
      }
  
      if (existingComment.user_id !== user_id) {
        return res.status(403).json({ error: "Você não tem permissão para atualizar este comentário." });
      }

      const updatedComment = await existingComment.update({
        comment,
      });
  
      return res.json(updatedComment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async delete(req, res) {
    const { comment_id } = req.params;
    const { user_id } = req.body;
  
    try {
      const existingComment = await Comment.findByPk(comment_id);
  
      if (!existingComment) {
        return res.status(404).json({ error: "Comentário não encontrado!" });
      }
  
      if (existingComment.user_id !== user_id) {
        return res.status(403).json({ error: "Você não tem permissão para excluir este comentário." });
      }
  
      await existingComment.destroy();
  
      return res.status(200).json({
        status: 1,
        message: "Comentário deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
