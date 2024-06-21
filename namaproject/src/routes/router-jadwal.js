// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel didalamnya
const homeController = require('../controllers').home;
const jadwalController = require('../controllers').jadwal;
// Definisikan middleware verify.js
const verifyUser = require('../configs/verify');


router.get('/', verifyUser.isLogin, jadwalController.jadwal);
router.get('/jadwal', verifyUser.isLogin, jadwalController.jadwal);


// Export agar dapat dibaca oleh express
module.exports = router;