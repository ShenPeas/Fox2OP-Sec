// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel didalamnya
const AdminPost_beritaController = require('../controllers').AdminPost_berita;
// Definisikan middleware verify.js
const verifyUser = require('../configs/verify');


router.get('/', verifyUser.isLogin, AdminPost_beritaController.AdminPost_berita);
router.get('/AdminPost_berita', verifyUser.isLogin, AdminPost_beritaController.AdminPost_berita);


// Export agar dapat dibaca oleh express
module.exports = router;