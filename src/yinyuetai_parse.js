var http = require('http');
var qs = require('querystring');

module.exports = function(song_id,format,callback_next){
    var options;
    var data;
    data = {
        videoId: song_id
    };

    var content = qs.stringify(data);
    // console.log(content);
    var options = {
        hostname: 'www.yinyuetai.com',
        port: 80,
        path: '/api/info/get-video-urls?' + content,
        method: 'GET'
    };   
    var parse = function(callback) {
        // console.log(format);
        var req;
        req = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                chunk = JSON.parse(chunk);
                // console.log(chunk.hcVideoUrl);
                if(format == 0){
                    if (chunk.hcVideoUrl != undefined)
                        console.log(chunk.hcVideoUrl);
                    else
                        console.log("无标清清晰度");
                }else if(format == 1){
                    if (chunk.hdVideoUrl != undefined)
                        console.log(chunk.hdVideoUrl);
                    else
                        console.log("无高清清晰度");
                }else if(format == 2){
                    if (chunk.heVideoUrl != undefined)
                        console.log(chunk.heVideoUrl);
                    else
                        console.log("无超清清晰度");
                }
            });
        });
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
        return req.end();
    };
    parse();
}