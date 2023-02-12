exports.users_list = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Liste des users !");
}

exports.user_detail = function(req, res, next) {
  res.send("NOT IMPLEMENTED: Détail d'un user: " + req.params.id);
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