const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    pais_idpais: {
        type: mongoose.Schema.Types.ObjectId, // Clave foránea
        ref: 'Pais', // Referencia al modelo "Pais"
        required: true
    }
}, {
    timestamps: true // Agrega campos de creación y actualización automáticamente
});

module.exports = mongoose.model('Sucursal', sucursalSchema);