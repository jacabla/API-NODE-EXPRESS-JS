const { Pool } = require('pg')

const pool = new Pool ( {
    host: 'localhost',
    user: 'postgres',
    password: 'Tcby7260',
    database: 'Brandfolder',
    port: 5432
})

//Select all the users in the table usuarios
const selectUsuarios = 'SELECT * FROM usuarios'
const getUsuarios = async (req, res) => {
   const response = await pool.query(selectUsuarios)
   res.json(response.rows)
}


//Select the user by Id in the table usuarios
const UserById = 'SELECT * FROM usuarios WHERE id_usuario = $1';
const usuarioById = async (req, res) => {
    const response = await pool.query(UserById, [req.params.id_usuario]);
    res.json(response.rows);
};


// Insert a new usuer in table usuarios by params
const newUsuario = 'INSERT INTO usuarios (id_usuario, nombre, apellido, edad) VALUES ($1, $2, $3, $4)'
const createUsuarios = async (req, res) => {
    const { id_usuario, nombre, apellido, edad } = req.body;
    const response = await pool.query(newUsuario, [id_usuario, nombre, apellido, edad] )
    res.json({
        message: `Usuario ${nombre} ${apellido} creado de manera satisfactoria`,
        body: {
            usuario: {id_usuario, nombre, apellido, edad}
        }
    })
}

//delete an user using the id
const deleteUserById = 'DELETE FROM usuarios WHERE id_usuario = $1';
const deleteUsuarios = async (req, res) => {
    const deleted = await pool.query(deleteUserById, [req.params.id_usuario]);
    res.json({
        message: `Usuario ${req.params.id_usuario} eliminado de manera satisfactoria`,
    });
};

//Update user params by Id
const updateUsuarios = async (req, res) => {
    const id_usuario = req.params.id_usuario
    const {nombre, apellido} = req.body;
    const deleted = await pool.query('UPDATE usuarios SET nombre = $1, apellido = $2 WHERE id_usuario = $3', 
    [nombre, apellido, id_usuario]);
    res.json({message : `Usuario ${id_usuario} modificado de manera satisfactoria`})
}

module.exports = { getUsuarios, createUsuarios, deleteUsuarios, updateUsuarios, usuarioById }