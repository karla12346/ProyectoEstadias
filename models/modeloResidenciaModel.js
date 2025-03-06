const mongoose = require('mongoose');

const modeloResidenciaSchema = new mongoose.Schema({
    terreno: {
        type: String,
        required: true
    },
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
    residencial_idresidencial: {
        type: mongoose.Schema.Types.ObjectId, // Clave foránea
        ref: 'Residencial', // Referencia al modelo "Residencial"
        required: true
    }
}, {
    timestamps: true // Agrega campos de creación y actualización automáticamente
});

module.exports = mongoose.model('ModeloResidencia', modeloResidenciaSchema);