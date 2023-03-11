const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'godzila'
});

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());

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


// Serve static files from the /Rolls directory
app.use(express.static(path.join(__dirname, 'Rolls')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});