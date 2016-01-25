var request = require('request');
var jsdom = require('jsdom');
var jquery = require('jquery');

var mvid = 214288;

var catch_html = function(callback) {
    // console.log('1234');
    console.log(mvid);
    request('http://music.163.com/mv?id=' + mvid, function (error, response, body) {
        try{    
            console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                // console.log(body);
                callback(body);
            }else{
                callback(0);
            }
        }catch(e){
            callback(1);
        }
     })
};  

var catch_info = function(hhtml){
    // console.log(hhtml);
    if(hhtml == 0){
        callback_next(0);
    }else if(hhtml == 1){
        callback_next(1);
    }else{
        jsdom.env(
            hhtml,
            function (errors, window) {
                var flashvars = jquery(window)("embed").attr('flashvars');
                console.log(flashvars);
                console.log(flashvars.match(/hurl=(\d{7})/) );
            }
        );
    }
}
catch_html(catch_info);