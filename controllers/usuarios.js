const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require("express-validator");

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

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        return res.status(400).json({
            msg: `El correo ${correo} ya está registrado`
        });
    }

    // Crifrar la contraseña
    const salt = bcryptjs.genSaltSync(); // default: 10
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
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