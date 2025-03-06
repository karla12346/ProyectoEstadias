const mongoose = require('mongoose');

const modeloApartamentoSchema = new mongoose.Schema({
    metrosconstruccion: {
        type: String,
        required: true
    },
    niveles: {
        type: String,
        required: true
    },
    cuartos: {
        type: Number,
        required: true
    },
    baños: {
        type: Number,
        required: true
    },
    folio: {
        type: String,
        required: true
    },
    partida: {
        type: String,
        required: true
    },
    direccionDicabi: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    latitud: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    edificio_idedificio: {
        type: mongoose.Schema.Types.ObjectId, // Clave foránea
        ref: 'Edificio', // Referencia al modelo "Edificio"
        required: true
    },
    edificio_sucursal_idsucursal: {
        type: mongoose.Schema.Types.ObjectId, // Clave foránea
        ref: 'Sucursal', // Referencia al modelo "Sucursal"
        required: true
    }
}, {
    timestamps: true // Agrega campos de creación y actualización automáticamente
});

module.exports = mongoose.model('ModeloApartamento', modeloApartamentoSchema);