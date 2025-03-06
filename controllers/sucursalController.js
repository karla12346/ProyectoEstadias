const Sucursal = require('../models/sucursalModel');

// Insertar una sucursal
const insertarSucursal = async (req, res) => {
    const { nombre, direccion, pais_idpais } = req.body;

    try {
        const sucursal = await Sucursal.create({ nombre, direccion, pais_idpais });
        res.status(201).json(sucursal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las sucursales
const obtenerSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.find().populate('pais_idpais'); // Populate para obtener datos del país
        res.status(200).json(sucursales);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una sucursal por ID
const obtenerSucursalPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const sucursal = await Sucursal.findById(id).populate('pais_idpais');
        if (!sucursal) {
            return res.status(404).json({ message: 'Sucursal no encontrada' });
        }
        res.status(200).json(sucursal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una sucursal
const actualizarSucursal = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, pais_idpais } = req.body;

    try {
        const sucursal = await Sucursal.findByIdAndUpdate(
            id,
            { nombre, direccion, pais_idpais },
            { new: true } // Devuelve el documento actualizado
        ).populate('pais_idpais');

        if (!sucursal) {
            return res.status(404).json({ message: 'Sucursal no encontrada' });
        }
        res.status(200).json(sucursal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una sucursal
const eliminarSucursal = async (req, res) => {
    const { id } = req.params;

    try {
        const sucursal = await Sucursal.findByIdAndDelete(id);
        if (!sucursal) {
            return res.status(404).json({ message: 'Sucursal no encontrada' });
        }
        res.status(200).json({ message: 'Sucursal eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    insertarSucursal,
    obtenerSucursales,
    obtenerSucursalPorId,
    actualizarSucursal,
    eliminarSucursal
};