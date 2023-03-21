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

app.get("/personnage/:id", (req, res) => {
  const id = req.params.id;
  getPersonnageById(id, (results) => {
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
  const userId = req.session.userId;
  if (userId) {
    data = "kull";
    res.render('personnage', { data }); // Pass the message to the dashboard view
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



app.get('/characterslist', (req, res) => {
  const message = req.query.message;
  const userId = req.session.userId;
  if (userId) {
    data = "kull";
    res.render('characterslist', { message, data }); // Pass the message to the dashboard view
  } else {
    res.redirect('/connexion');
  }

});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});