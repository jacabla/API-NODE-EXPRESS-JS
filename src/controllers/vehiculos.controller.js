const { Pool } = require('pg')

const pool = new Pool ( {
    host: 'localhost',
    user: 'postgres',
    password: 'Tcby7260',
    database: 'Brandfolder',
    port: 5432
})

//Select all the vehiculesin the table vehiculos
const selectVehiculos = 'SELECT * FROM vehiculos'
const getVehiculos = async (req, res) => {
   const response = await pool.query(selectVehiculos)
   res.json(response.rows)
}

// Insert a new usuer in table vehicule by params
const newVehiculo = 'INSERT INTO vehiculos (marca, modelo, concecionario) VALUES ($1, $2, $3)'
const createVehiculo = async (req, res) => {
    const { marca, modelo, concecionario } = req.body;
    const response = await pool.query(newVehiculo, [marca, modelo, concecionario] )
    res.json({
        message: `Vehiculo  ${marca} '' ${modelo} creado de manera satisfactoria`,
        body: {
            usuario: {marca, modelo, concecionario}
        }
    })
}

//delete vehicule using the id
const deleteVehiculeById = 'DELETE FROM vehiculos WHERE id = $1';
const deleteVehiculo= async (req, res) => {
    const deleted = await pool.query(deleteVehiculeById, [req.params.id]);
    res.json({
        message: `Vehiculo ${req.params.id} eliminado de manera satisfactoria`,
    });
};


//Update vehicule params by Id
const updateVehiculo = async (req, res) => {
    const id = req.params.id
    const {marca, modelo, concecionario} = req.body;
    const deleted = await pool.query('UPDATE vehiculos SET marca = $1, modelo = $2, concecionario = $3 WHERE id = $4', 
    [marca, modelo, concecionario, id]);
    res.json({message : `Vehiculo ${id} modificado de manera satisfactoria`})
}

//Select the vehicule by Id in the table usuarios
const UserById = 'SELECT * FROM vehiculos WHERE id = $1';
const vehiculoById = async (req, res) => {
    const response = await pool.query(UserById, [req.params.id]);
    res.json(response.rows);
};


module.exports = { getVehiculos, createVehiculo, deleteVehiculo, updateVehiculo,vehiculoById };