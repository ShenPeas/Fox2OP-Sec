// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel didalamnya
const AdminPost_jadwalController = require('../controllers').AdminPost_jadwal;
// Definisikan middleware verify.js
const verifyUser = require('../configs/verify');


router.get('/', verifyUser.isLogin, AdminPost_jadwalController.AdminPost_jadwal);
router.get('/AdminPost_jadwal', verifyUser.isLogin, AdminPost_jadwalController.AdminPost_jadwal);
router.post('/setjadwal', verifyUser.isLogin, AdminPost_jadwalController.saveJadwal);

// Export agar dapat dibaca oleh express
module.exports = router;