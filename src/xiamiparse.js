var http = require('http');

module.exports = function(song_id,format,callback_next){
    var options
    if (format == 0){
        options = {
            hostname: 'www.xiami.com',
            port: 80,
            path: '/song/gethqsong/sid/' + song_id,
            method: 'GET',
            headers: {
                'Referer': 'http://www.xiami.com/play?ids=/song/playlist/id/1771679904/object_name/default/object_id/0',
            }
        };
    }else{
        options = {
            hostname: 'www.xiami.com',
            port: 80,
            path: '/song/gethqsong/sid/' + song_id,
            method: 'GET',
            headers: {
                'Referer': 'http://www.xiami.com/play?ids=/song/playlist/id/1771679904/object_name/default/object_id/0',
                'Cookie': '_unsign_token=ba3b15a91d79d83165fd2ae0410ca2cb; bdshare_firstime=1453210680995; __gads=ID=8e9a4b97a79d3b33:T=1453210681:S=ALNI_MbWlVSNczpJeCjAM-wjShX2Kc19WA; member_auth=0myYS90f6Gs2ivOWGYtkJiNK47KFTGPQwY4D3rYpsFcncI4KMYP9xquXSwhL3ymSrGHIqCZEUK2Rk1YuWr29q7CyHg; user=69337914%22%E7%8C%AB%E8%BD%A6%EF%BC%88CAT-R%29%22images%2Favatar_new%2F1386%2F69337914_1445771969_1.jpg%222%22218%22%3Ca+href%3D%27%2Fwebsitehelp%23help9_3%27+%3Emi%3C%2Fa%3E%221%224%22249%22a71624ab7e%221453210785; __XIAMI_SESSID=baf5737de7a952ebb72320748ab47f85; CNZZDATA921634=cnzz_eid%3D206891485-1453205718-http%253A%252F%252Fwww.xiami.com%252F%26ntime%3D1453209388; CNZZDATA2629111=cnzz_eid%3D287761902-1453206463-http%253A%252F%252Fwww.xiami.com%252F%26ntime%3D1453211863; _xiamitoken=23b17a564aaf34cb3a9621dd764128b6; __guestplay=MTc3MTY3OTg5OCw5; isg=3B5AD0365357E47C5400B1E775E4FA54; l=ArGxZpmc2GYK4u7hZLnLNkTAQTdLjSUQ'
            }
        };
    }

    var parse = function(callback) {
        var req;
        req = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                chunk = JSON.parse(chunk);
                callback(chunk.location);
            });
        });
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
        return req.end();
    };

    var getMp3Location = function(str,callback) {
        try {
            var a1 = parseInt(str.charAt(0)),
                a2 = str.substring(1),
                a3 = Math.floor(a2.length / a1),
                a4 = a2.length % a1,
                a5 = [],
                a6 = 0,
                a7 = '',
                a8 = '';
            for (; a6 < a4; ++a6) {
                a5[a6] = a2.substr((a3 + 1) * a6, (a3 + 1));
            }
            for (; a6 < a1; ++a6) {
                a5[a6] = a2.substr(a3 * (a6 - a4) + (a3 + 1) * a4, a3);
            }
            for (var i = 0,a5_0_length = a5[0].length; i < a5_0_length; ++i) {
                for (var j = 0,a5_length = a5.length; j < a5_length; ++j) {
                    a7 += a5[j].charAt(i);
                }
            }
            a7 = decodeURIComponent(a7);
            for (var i = 0,a7_length = a7.length; i < a7_length; ++i) {
                a8 += a7.charAt(i) === '^' ? '0': a7.charAt(i);
            }
            console.log(a8);
            callback_next(a8);
        } catch(e) {
            return false;
        }
    }
    parse(getMp3Location);
}