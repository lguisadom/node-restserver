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
    res.json({
        msg: 'post API - controller'
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