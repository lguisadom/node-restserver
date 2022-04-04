const { request, response } = require('express');

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

const usuariosPost = (req, res) => {

    const body = req.body;
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controller',
        body,
        nombre, 
        edad
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