// Definisi Library yang digunakan
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

// Definisi lokasi file router
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
const appRoutes = require('./src/routes/router-app');
const jadwalRoutes = require('./src/routes/router-jadwal');
const beritaRoutes = require('./src/routes/router-berita');
const AdminPost_jadwalRoutes = require('./src/routes/router-AdminPost_jadwal');
const AdminPost_beritaRoutes = require('./src/routes/router-AdminPost_berita');

// Configurasi dan gunakan library
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));
// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 't@1k0ch3ng',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))
app.use(flash());

// Setting folder views
app.use(express.static(__dirname + '/src/views/css'));
app.use(express.static(__dirname + '/src/views/images'));
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

// Gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/jadwal', jadwalRoutes);
app.use('/berita', beritaRoutes);
app.use('/AdminPost_jadwal', AdminPost_jadwalRoutes);
app.use('/AdminPost_berita', AdminPost_beritaRoutes);
app.use('/', appRoutes);


// Gunakan port server
app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : '+5050);
});
