const Users = require("../models/userModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    async login(req, res){
        const {user_email, user_password} = req.body;
    
        const user = await Users.findOne({
            where: {
              user_email: user_email,
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado.' });
        }

       const verifyPassword = await bcrypt.compare(user_password, user.user_password);

       if (!verifyPassword) {
        return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
      }

      const token = jwt.sign({id: user.id}, process.env.JWT_PASS, {expiresIn: '8h'});

      const userLogin = {
        id: user.id,
        user_name: user.user_name,
        user_email: user.user_email,
      }

      return res.json({
        user: userLogin,
        token
      })
    }
}