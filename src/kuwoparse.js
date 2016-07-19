var http = require('http');
var qs = require('querystring');

module.exports = function(song_id,format,callback_next){
    var options;
    var data;
    if (format == 0){
        data = {
            rid: 'MUSIC_' + song_id,
            response: 'url',
            format: 'aac|mp3',
            type: 'convert_url'
        };
    }else if (format == 1){
        data = {
            rid: 'MUSIC_' + song_id,
            response: 'url',
            format: 'mp3',
            type: 'convert_url'
        };
    }else{
        data = {
            rid: 'MUSIC_' + song_id,
            response: 'url',
            format: 'ape',
            type: 'convert_url'
        };
    }
    var content = qs.stringify(data);
    // console.log(content);
    var options = {
        hostname: 'antiserver.kuwo.cn',
        port: 80,
        path: '/anti.s?' + content,
        method: 'GET'
    };   
    var parse = function(callback) {
        var req;
        req = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                console.log(chunk);
            });
        });
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
        return req.end();
    };
    parse();
}