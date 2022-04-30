import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import UserModel from "../models/UserModel.js";
dotenv.config();

class Signin {
  static signin = (req, res) => {
    UserModel.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      if (!user) {
        return res.status(404).send({ msg: "Usuário não encontrado" });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        res.status(400).json({ msg: "Senha inválida" });
      } else {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: 86000,
        });

        res.status(200).json({
          email: user.email,
          name: user.name,
          accessToken: token,
        });
      }
    });
  };
}

export default Signin;
