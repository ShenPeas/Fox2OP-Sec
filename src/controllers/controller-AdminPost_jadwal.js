// Definisikan configurasi Database
const config = require('../configs/database');
// Gunakan library mysql
let mysql      = require('mysql');
// Buat koneksi
let pool       = mysql.createPool(config);

// Kirim error jika koneksi gagal
pool.on('error',(err)=> {
    console.error(err);
});
module.exports ={
    AdminPost_jadwal(req,res){
        res.render("AdminPost_jadwal",{
            url: 'https://fox2op.gajiin.my.id/'
             });
        },
        saveJadwal(req,res){
            // Tampung inputan user kedalam varibel username, email dan password
            let gambar = req.body.gambar;
            let nama = req.body.nama;
            let jadwal = req.body.jadwal;
            let status = req.body.status;
            // Panggil koneksi dan eksekusi query
            pool.getConnection(function(err, connection) {
                if (err){
                    console.log(err);
                    throw err;
                } 
                connection.query(
                    `INSERT INTO jadwal (nama,gambar,status,jadwal) VALUES (?,?,?,?);`
                , [nama, gambar, jadwal, status],function (error, results) {
                    if (error){
                        console.log(error);
                        throw error;
                    } 
                    // Jika tidak ada error, set library flash untuk menampilkan pesan sukses
                    // Kembali kehalaman login
                    res.send('OK');
                });
                // Koneksi selesai
                connection.release();
            })
        }
    }
