const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    })
};

const usuariosPut = (req, res) => {
    res.json({
        msg: 'put API - controller'
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