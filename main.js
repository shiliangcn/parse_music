var xiami = require('./src/xiamiparse.js');
var kuwo = require('./src/kuwoparse.js');


var format = 1 //0为普通音质，1为高音质
var song_id = '362554' // xiami test
// var song_id = '6639258' //kuwo test
xiami(song_id,format);
// kuwo(song_id,format);