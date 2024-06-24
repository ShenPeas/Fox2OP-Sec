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
    jadwal(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM jadwal order by id_jadwal desc limit 1;
                `
            , function (error, results) {
                if(error) throw error;
                // console.log("$$$$$$$$$$$$$$"+results[0]['gambar']);
                if (results.length>0){
                    res.render("jadwal",{
                        url: 'https://fox2op.gajiin.my.id/',
                        nama:results[0]['nama'],
                        jadwal:results[0]['jadwal'],
                        status:results[0]['status'],
                        gambar:results[0]['gambar']
                         });
                }else{
                    res.render("jadwal",{
                        url: 'https://fox2op.gajiin.my.id/',
                        nama:'',
                        jadwal:'',
                        status:'',
                        gambar:''
                         });
                }
            });
            connection.release();
        })}}
