const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const session = require('express-session');


// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'godzila'
});

const leseletlepoivre = 'HMMMhmhmmhmhmhmhmhmhmh\%\%X0X0\%\%hmhmmhmjaimeca';
// Create an Express app
const app = express();

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

// Enable CORS
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const getProfil = (pseudo, callback) => {
  // Write the SQL query
  const query = `SELECT * FROM profil WHERE pseudo = "${pseudo}"`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results, fields) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};

const getPersonnageById = (Id_Personnage, callback) => {
  // Write the SQL query
  const query = `SELECT * FROM personnage WHERE Id_Personnage = ${Id_Personnage}`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results, fields) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};

const setPersonnageFieldById = (field, value, Id_Personnage, callback) => {
  // Write the SQL query
  const query = `UPDATE personnage SET ${field} = ${mysql.escape(value)} WHERE Id_Personnage = ${mysql.escape(Id_Personnage)}`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results, fields) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};

const getCharactersById = (Id_Profil, callback) => {
  // Write the SQL query
  const query = `SELECT personnage.Id_Personnage, personnage.nom FROM personnage Inner join control on control.Id_Personnage=personnage.Id_Personnage WHERE control.Id_Profil = ${Id_Profil}`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results, fields) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};

const getProfilbyPersonnage = (Id_Personnage, callback) => {
  // Write the SQL query
  const query = `SELECT control.Id_Profil FROM personnage Inner join control on control.Id_Personnage=personnage.Id_Personnage WHERE control.Id_Personnage = ${Id_Personnage}`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results, fields) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};



app.get("/personnage/:id", (req, res) => {
  const id = req.params.id;
  getPersonnageById(id, (results) => {
    res.send(results);
  });
});

const newCharacter = (callback) => {
  // Write the SQL query
  const query = "INSERT INTO `personnage` (`Id_Personnage`, `nom`, `age`, `genre`, `instinct`, `signeastro`, `origine`, `reputation`, `depensee`, `totale`, `puissance`, `resistance`, `precicion`, `reflexes`, `connaissance`, `perception`, `volonte`, `arts`, `cite`, `civilisations`, `relationnel`, `soins`, `animalisme`, `faune`, `montures`, `pistage`, `territoire`, `adresse`, `armurerie`, `artisanat`, `mecanisme`, `runes`, `athletisme`, `discretion`, `flore`, `vigilance`, `voyage`, `bouclier`, `cac`, `lancer`, `melee`, `tir`, `eclats`, `lunes`, `mythes`, `pantheons`, `rituels`, `malusphysique`, `malusmanuel`, `malussocial`, `malushumain`, `malusanimal`, `malusoutils`, `malusterres`, `malusarme`, `malusinconnu`, `malusmental`, `empathie`, `maxblessurelegere`, `blessurelegere`, `maxblessuregrave`, `blessuregrave`, `maxblessuremortelle`, `blessuremortelle`, `maxeffort`, `effort`, `maxsangfroid`, `sangfroid`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);";
  
  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results) => {
      if (error) {
        console.error("Error executing query: " + error.stack);
        connection.release(); // Release the connection back to the pool
        callback(error);
        return;
      }

      // Execute the SELECT statement to get the last inserted ID
      const selectQuery = "SELECT LAST_INSERT_ID();";
      connection.query(selectQuery, (error, idResult) => {
        connection.release(); // Release the connection back to the pool

        if (error) {
          console.error("Error executing query: " + error.stack);
          callback(error);
          return;
        }

        const lastId = idResult[0]["LAST_INSERT_ID()"];
        callback(lastId);
      });
    });
  });
};

const associateCharacterProfil = (userId, characterId, callback) => {
  // Write the SQL query
  const query = `INSERT INTO \`control\` (\`Id_Personnage\`, \`Id_Profil\`) VALUES ( ${characterId}, ${mysql.escape(userId)})`;

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, (error, results) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};

const setThrow = (diceValues, Id_Personnage, callback) => {

  // Write the SQL query
  const query = `INSERT INTO \`throws\` (\`Id_Throws\`, \`diceValues\`, \`Id_Personnage\`) VALUES (?, ?, ?)`;
  const values = [null, diceValues, Id_Personnage];

  // Get a connection from the pool and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection: " + err.stack);
      return;
    }

    connection.query(query, values, (error, results) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error executing query: " + error.stack);
        return;
      }
      callback(results);
    });
  });
};


app.get("/newcharacter/:id", (req, res) => {
  const id = req.params.id;
  newCharacter((results) => {
    associateCharacterProfil(id, results, (results2)=>{
      res.send(results2);
    });
    
  });
});


app.get("/getcharacters/:id", (req, res) => {
  const id = req.params.id;
  getCharactersById(id, (results) => {
      res.send(results);
  });
});


// Route to update a personnage field by ID
app.put('/personnage/:id/:field/:value', (req, res) => {
  const { id, field, value } = req.params;
  setPersonnageFieldById(field, value, id, (results) => {
    res.send(results);
  });
});

app.get('/profilconnexion', (req, res) => {
  const { pseudo, pass } = req.query;
  const hash = crypto.createHash('sha256')
  .update(pass + leseletlepoivre)
  .digest('hex');
  getProfil(pseudo, (results) => {
    if (results && results.length > 0) {
      if(results[0]["passw"] == hash){
        req.session.userId = results[0]["Id_Profil"]; // Set the session for the user
        res.redirect('/characterslist?message=Connexion%20Successfull'); // Redirect the user to the dashboard route with a message
      } else {
        res.redirect('/connexion?message=Invalid%20credentials'); // Redirect the user to the login route with an error message
      }
    } else {
      res.redirect('/connexion?message=Invalid%20credentials');
    }
  });
});

// Serve static files from the /Rolls directory
app.use(express.static(path.join(__dirname, 'Rolls')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/Rolls/views'));

app.get('/charactersheet', (req, res) => {
  const { Id_Personnage } = req.query;
  const userId = req.session.userId;
  if (userId) {
    getProfilbyPersonnage(Id_Personnage, (results) => {
      if (results && results.length > 0){
        if(results[0]["Id_Profil"] === userId || userId === 1){
          res.render('personnage', { Id_Personnage });
        }else{
          res.redirect('/connexion?message=Mauvais%20compte');
        }
      }else{
        res.redirect('/connexion');
      }
    });
  } else {
    res.redirect('/connexion');
  }
});

app.get('/connexion', (req, res) => {
  const message = req.query.message;
  if(message){
    res.render('connexion', { message });
  } else{
    res.render('connexion');
  }
});

app.get('/', (req, res) => {

  const message = req.query.message;
  if(message){
    res.render('connexion', { message });
  } else{
    res.render('connexion');
  }
});

app.get('/lore', (req, res) => {
  res.render('lore');
});

app.get('/AI', (req, res) => {
  res.render('ai');
});

app.get('/map', (req, res) => {
  res.render('map');
});

app.get('/downloads', (req, res) => {
  res.render('downloads');
});

app.get('/mj', (req, res) => {
  const userId = req.session.userId;
  if (userId && userId==1) {
    data = "kull";
    res.render('mj', {data});
  } else {
    res.redirect('/connexion?message=R%C3%A9serv%C3%A9%20aux%20administrateurs');
  }
  
});


app.get('/characterslist', (req, res) => {
  const message = req.query.message;
  const userId = req.session.userId;
  if (userId) {
    res.render('characterslist', { message, userId }); // Pass the message to the dashboard view
  } else {
    res.redirect('/connexion');
  }

});


app.get("/throws", (req, res) => {
  const id = req.params.id;
  getThrows(id, (results) => {
      res.send(results);
  });
});


// Route POST qui appelle setThrow avec les données du corps de la requête
app.put('/throws/new', (req, res) => {
  const { diceValues, Id_Personnage } = req.body;
  setThrow(diceValues, Id_Personnage, (results) => {
    res.send(results);
});
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
