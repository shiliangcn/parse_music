var xiami = require('./src/xiamiparse.js');
var kuwo = require('./src/kuwoparse.js');
var yinyuetai = require('./src/yinyuetai_parse.js');

var format = 1 //0为普通音质，1为高音质 音悦台:0标清,1高清,2超清
// var song_id = '1769662802' // xiami test
// var song_id = '6639258' //kuwo test
var song_id = '2485043' //yinyuetai test
yinyuetai(song_id,format);
// kuwo(song_id,format);