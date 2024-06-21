const login = require('./controller-login');
const register = require('./controller-register');
const home = require('./controller-home');
const profile = require('./controller-profile');
const jadwal = require('./controller-jadwal');
const berita = require('./controller-berita');
const AdminPost_jadwal= require('./controller-AdminPost_jadwal');
const AdminPost_berita= require('./controller-AdminPost_berita');

module.exports ={
	login,
	register,
	home,
	profile,
    jadwal,
	berita,
	AdminPost_jadwal,
	AdminPost_berita
};