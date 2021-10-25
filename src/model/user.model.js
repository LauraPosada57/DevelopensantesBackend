const dbConn = require('../../config/db.config');

const User = function(user){
    this.id_user = user.id_user;
    this.name = user.name;
    this.email = user.email;
    this.imageUrl = user.imageUrl;
    this.role = user.role;
}

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res, fields) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });
};

User.find = function (idUser, result) {
    dbConn.query("SELECT * FROM users WHERE id_user = ?", [idUser], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res[0]);
        }
    });
};

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


User.delete = function (idUser, result) {
    dbConn.query("DELETE FROM users WHERE id_user = ?", idUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
     dbConn.query("UPDATE users SET name=?,email=?,password=?,role=?,status=? WHERE id_user = ?",
      [user.name,user.email,user.password,user.role, user.status, id], function (err, res) {
     if(err) {
       console.log("error: ", err);
       result(null, err);
     }else{
       result(null, res);
     }
     });
 };

module.exports= User;
