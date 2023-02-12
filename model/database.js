const sqlite = require('sqlite3').verbose();

// Création de la base de données
const db = new sqlite.Database('model/clipboard.db', err => {
  if(err) {
    console.log("Erreur lors de la création de la base de données : ", err.message);
  } else {
    console.log("Base de données crée avec succès !");
  }
});


/**
 * Crée toutes les tables de la base de données
 */
function createTables() {
  db.run(
    `CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      confirmed INTEGER DEFAULT 0
    )`,
    err => {
      if(err) {
        console.log("Erreur lors de la création de la table users", err.message);
      } else {
        console.log("Table users créée avec succès !");
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS notes(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL,
      user_id INTEGER NOT NULL,
      visible INTEGER DEFAULT 0,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`,
    err => {
      if(err) {
        console.log("Erreur lors de la création de la table notes", err.message);
      } else {
        console.log("Table notes créée avec succès !");
      }
    }
  );
}

function populate(req, res, next) {
  db.exec(
    `
      DELETE FROM notes;
      DELETE FROM users;

      INSERT INTO users(id,username, confirmed) VALUES
      (1,'root', 1),
      (2,'oury', 1),
      (3,'conte', 1),
      (4,'moustapha', 0),
      (5,'sumptring', 1);

      INSERT INTO notes(title, content, visible, user_id, created_at) VALUES
      ('Test 1', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis consequuntur asperiores necessitatibus, officia itaque qui similique deleniti quos reiciendis dolor porro architecto vel cupiditate eligendi dicta iusto error culpa? Odio qui voluptate itaque deleniti eius iste quos quisquam sed cumque minus a natus laborum et molestiae, dignissimos eligendi vitae sequi rerum maiores deserunt, recusandae, in repellat. Odio, quam iste. Ratione doloremque aliquam aperiam voluptatibus voluptatum sed magnam beatae, recusandae dolore doloribus hic officia veniam dolor? Vitae atque officiis odit corrupti, dolorem dolor cum facere perferendis nesciunt tenetur. Aspernatur, quisquam! Tenetur voluptate itaque provident voluptatum, non ab ex ut dignissimos veniam odio laborum alias numquam earum asperiores, autem recusandae tempora pariatur mollitia quae eaque dolorem? Voluptas reprehenderit dolores voluptatibus hic!', 1, 1, '${new Date('2023-02-12').toISOString()}'),
      
      ('Test 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis consequuntur asperiores necessitatibus, officia itaque qui similique deleniti quos reiciendis dolor porro architecto vel cupiditate eligendi dicta iusto error culpa? Odio qui voluptate itaque deleniti eius iste quos quisquam sed cumque minus a natus laborum et molestiae, dignissimos eligendi vitae sequi rerum maiores deserunt, recusandae, in repellat.', 0, 2, '${new Date('2023-02-09').toISOString()}'),
      
      
      ('Test 3', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis consequuntur asperiores necessitatibus, officia itaque qui similique deleniti quos reiciendis dolor porro architecto vel cupiditate eligendi dicta iusto error culpa?', 1, 2, '${new Date('2023-02-10').toISOString()}'),
      
      ('Test 4', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis consequuntur asperiores necessitatibus, officia itaque qui similique deleniti quos reiciendis dolor porro architecto vel cupiditate eligendi dicta iusto error culpa?', 1, 3, '${new Date('2023-02-10').toISOString()}'),
      
      ('Test 5', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis consequuntur asperiores necessitatibus, officia itaque qui similique deleniti quos reiciendis dolor porro architecto vel cupiditate eligendi dicta iusto error culpa?', 1, 1, '${new Date('2023-02-09').toISOString()}');
    `,
    err => {
      if(err) {
        console.log({err})
        res.status(500).send("Une erreur est survenue lors de création des données de test");
      } else {
        res.status(500).send("Les données de test ont été créées avec succès !");
      }
    }
  )
}

exports.createTables = createTables
exports.populate = populate