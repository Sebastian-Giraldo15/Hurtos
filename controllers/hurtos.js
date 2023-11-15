const {response} = require('express')

Hurto = require('../models/hurto')

const getHurto = async(req, res) => {
    const hurtos = await Hurto.find();
    res.json({
        msg: hurtos
    })
}

const postHurto = async(req, res) => {
    const datos = req.query
    let mensaje = 'Datos ingresados correctamente!'
    try{
        const hurto = new Hurto(datos)
        await hurto.save()
        console.log(hurto)
    } catch(error) {
        mensaje = error
        console.log(error)
    }
    
    res.json({
        msg: mensaje
    })
}

const putHurto = async(req, res) =>{
    const {tipohurto, direccion, fecha, descripcion} = req.query
    try {
        const hurto = await Hurto.findOneAndUpdate({tipohurto: tipohurto},
            {direccion:direccion, fecha:fecha, descripcion:descripcion})
            mensaje = 'Datos editados correctamente'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteHurto = async(req, res) =>{
    const {tipohurto} = req.query //Desestructurar
    try {
        const hurto = await Hurto.findOneAndDelete({tipohurto:tipohurto})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto
}