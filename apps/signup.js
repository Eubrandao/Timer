const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class Signup {
  static listUsers = (req, res) => {
    UserModel.find((err, users) => {
      res.status(200).json({ users });
    });
  };

  static listUser = (req, res) => {
    const id = req.params.id;
    UserModel.findById((err, user) => {
      if (err) {
        res.status(500).json({ msg: "Ops, Houve algum erro!" });
      } else if (id < 0) {
        res.status(404).json({ msg: "Usuário não encontrado!" });
      } else if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado!" });
      }
    });
  };

  static newUser = (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };

    if (req.body.email.length < 4) {
      res.status(500).json({ msg: "Informe um E-mail válido!" });
    }

    if (req.body.password.length < 8) {
      res.status(404).json({ msg: "Digite uma senha que tenha 8 caracteres!" });
    } else {
      UserModel.create(user);
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    }
  };

  static userUpdate = (req, res) => {
    const id = req.params.id;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };

    if (req.body.email.length < 4) {
      res.status(500).json({ msg: "Informe um E-mail válido!" });
    }

    if (req.body.password.length < 8) {
      res.status(404).json({ msg: "Digite uma senha que tenha 8 caracteres!" });
    } else {
      UserModel.findByIdAndUpdate(id, { $set: user }, (err) => {
        if (!err) {
          res.status(200).json({ msg: "Usuário atualizado com sucesso!" });
        } else {
          res.status(500).json({ msg: err });
        }
      });
    }
  };

  static userDelete = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).json({ msg: "Usuário deletado com sucesso!" });
      } else {
        res.status(500).json({ msg: err });
      }
    });
  };
}

module.exports = Signup;
