const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const todoJuegos = require('./00_juegosRouter.js');
const juegoPorId = require('./01_getIdRouter.js');
const juegoPorNombre = require('./02_getNameRouter.js');
const crearJuego = require('./03_postRouter.js');
const todoGeneros = require('./04_getGenresRouter.js');
const plataformas = require('./05_plataformaRouter.js');
const juegosCreados = require('./06_creadosRouter.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/juegos', todoJuegos);
router.use('/juego', juegoPorId);
router.use('/juego', juegoPorNombre);
router.use('/plataforma', plataformas);
router.use('/genres', todoGeneros);
router.use('/crear', crearJuego);
router.use('/juegos', juegosCreados);


module.exports = router;
