const { request, response } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {
    const queryParams = req.query;
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controller',
        queryParams,
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controller',
        id
    })
}

const usuariosPost = async(req, res) => {
    /* // Una forma de ignorar al atributo google para que no sea seteado desde el frontend
    const { google, ...resto } = req.body;
    const usuario = new Usuario( resto );
    */
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol} );
    await usuario.save();

    res.json({
        usuario
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controller'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}