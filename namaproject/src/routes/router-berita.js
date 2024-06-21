// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel didalamnya
const beritaController = require('../controllers').berita;
// Definisikan middleware verify.js
const verifyUser = require('../configs/verify');


router.get('/', verifyUser.isLogin, beritaController.berita);
router.get('/berita', verifyUser.isLogin, beritaController.berita);


// Export agar dapat dibaca oleh express
module.exports = router;