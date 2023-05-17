const { Router } = require('express');
const router = Router();

const { 
    getUsuarios,
    createUsuarios,
    deleteUsuarios,
    updateUsuarios,
    usuarioById } = require('../controllers/usuarios.controller')

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id_usuario', usuarioById)
router.post('/usuarios', createUsuarios)
router.delete('/usuarios/:id_usuario', deleteUsuarios)
router.put('/usuarios/:id_usuario', updateUsuarios)

const {
    getVehiculos,
    createVehiculo,
    deleteVehiculo,
    updateVehiculo,
    vehiculoById
} = require('../controllers/vehiculos.controller')

router.get('/vehiculos', getVehiculos)
router.post('/vehiculos', createVehiculo)
router.delete('/vehiculos/:id', deleteVehiculo)
router.put('/vehiculos/:id', updateVehiculo)
router.get('/vehiculos/:id', vehiculoById)

module.exports = router;