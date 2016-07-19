var xiami = require('./src/xiamiparse.js');
var kuwo = require('./src/kuwoparse.js');
var yinyuetai = require('./src/yinyuetai_parse.js');

var format = 1 //0为普通音质，1为高音质，2为无损音质（酷我） 音悦台:0标清,1高清,2超清
// var song_id = '1792541354' // xiami test
var song_id = '7134990' //kuwo test
// var song_id = '2485043' //yinyuetai test
// yinyuetai(song_id,format);
kuwo(song_id,2);
// xiami(song_id,1)