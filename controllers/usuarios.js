const { response, request } =  require('express');

const usuariosGet = (req = request, res = response) => {
    const { f, nombre = 'No Name', ipq, page = 1, limit = 10} = req.query;

    res.json({
        msg:'get API - Controlador',
        f,
        nombre,
        ipq,
        page,
        limit
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad} = req.body;

    res.json({
        msg:'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg:'put API - Controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg:'delete API - Controlador'
    });
}

const usuariosPacth = (req, res = response) => {
    res.json({
        msg:'pacth API - Controlador'
    });
}





module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPacth
}