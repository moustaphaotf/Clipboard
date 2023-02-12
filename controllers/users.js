const sqlite = require('sqlite3');

exports.users_list = function (req, res, next) {
  const db = new sqlite.Database('model/clipboard.db', err => {
    if(err) console.log("Erreur lors de l'ouverture de la base de données !");
  });

  db.all("SELECT * FROM users ORDER BY username", (err, result) => {
    if(err){
      return next(err);
    }
    
    res.render('users_list', {title: 'Liste des utilisateurs', users_list: result});
  })
  
  db.close();
}

exports.user_detail = function(req, res, next) {
  const db = new sqlite.Database('model/clipboard.db', err => {
    if(err) console.log("Erreur lors de l'ouverture de la base de données !");
  });

  db.all("SELECT * FROM notes WHERE user_id=? ORDER BY created_at DESC",[req.params.id], (err, result) => {
    if(err) {
      return next(err);
    }

    res.render('user_notes', {title: "Liste des notes", notes_list: result});
  });
  
  db.close();

}

exports.user_create_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Création d'un user get !");
}

exports.user_create_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Création d'un user post !");
}

exports.user_update_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Mise à jour d'un user get!");
}

exports.user_update_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Mise à jour d'un user post!");
}

exports.user_delete_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Suppression d'un user get");
}

exports.user_delete_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Suppression d'un user post");
}