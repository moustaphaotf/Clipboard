const sqlite = require('sqlite3');

exports.notes_list = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Liste des notes !");
}

exports.note_detail = function(req, res, next) {
  const db = new sqlite.Database('model/clipboard.db', err => {
    if(err) console.log("Erreur lors de l'ouverture de la base de données !");
  });

  db.get("SELECT * FROM notes WHERE id = ?", [req.params.id], (err, result) => {
    if(err) next(err);
    
    res.render("note_details", {note_details: result});
  }) 
}

exports.note_create_get = function (req, res, next) {
  res.render('note_upsert', {title: "Une nouvelle note"})
}

exports.note_create_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Création d'une note post !");
  console.log(req.body)
}

exports.note_update_get = function (req, res, next) {
  const db = new sqlite.Database('model/clipboard.db', err => {
    if(err) console.log("Erreur lors de l'ouverture de la base de données !");
  });

  db.get("SELECT * FROM notes WHERE id = ?", [req.params.id], (err, result) => {
    if(err) next(err);
    
    res.render("note_upsert", {title:"Modifier une note", note_details: result});
  });
}

exports.note_update_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Mise à jour d'une note post!");
  console.log(req.body)
}

exports.note_delete_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Suppression d'une note get");
}

exports.note_delete_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Suppression d'une note post");
}