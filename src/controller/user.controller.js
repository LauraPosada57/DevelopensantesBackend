'use strict';

const User = require('../model/user.model');


exports.create = function(req, res) {
    const user = new User(req.body);

    console.log("user to insert", user)

    User.create(user, function(err, createdUser) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "User added sucessfully", data: createdUser});
        }
    });
}

exports.findAll = function(req, res) {

    User.findAll(function(err, users) {

        console.log("in the controller");

        if (err) {
            res.send(err);
        } else {
            console.log("Finded: ", users)
            res.send(users);
        }
    });
}

exports.delete = function(req, res) {
    const idUser = req.params.id;

    console.log("product to delete", idUser)

    User.delete(idUser, function(err, deleteUser) {
        if (err) {
            res.send(err);
        } else {
            res.json({error: false, message: "User deleted sucessfully", data: deleteUser});
        }
    });
}

exports.update = function(req, res) {
    console.log("user to update", req.params.id)

    User.update(req.params.id, new User(req.body), function(err, user) {
     if (err) {
        res.send(err);
     } else {
        res.json({ error:false, message: 'User successfully updated' });
     }
    });
  
  }

exports.googleLogin = function (req, res){
    res.json({error: false, message: "Inicio de sesión exitoso", });
}
