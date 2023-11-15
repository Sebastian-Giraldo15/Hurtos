const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const HurtoSchema = ({
    tipohurto:{
        type: String,
        required:[true, 'El tipohurto es requerido'],
        enum:['Tipo 1', 'Tipo2', 'Tipo3']
    },

    direccion:{
        type: String,
        required:[true, "La direccion es requerida"]
    },

    fecha:{
        type: Date
    },

    ciudad:{
        type:String,
        required:[true, "La ciudad es requerida"]
    },

    descripcion:{
        type: String,
        required:[true, "La descripcion es requerida"]
    }
})

module.exports = model('Hurto', HurtoSchema)