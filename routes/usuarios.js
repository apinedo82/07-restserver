const { Router } =  require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPacth } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete)

router.patch('/', usuariosPacth)



module.exports = router;