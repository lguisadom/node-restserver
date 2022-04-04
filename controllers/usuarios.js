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

    const body = req.body;

    const usuario = new Usuario( body );
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