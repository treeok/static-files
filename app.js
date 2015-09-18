/**
 * Created by claire on 2015/9/18.
 */
var assert = require('assert'),
    path = require('path'),
    fs = require('fs'),
    vows = require('vows'),
    request = require('request'),
    httpServer = require('http-server');

var root = path.join(__dirname,'','');

vows.describe('http-server').addBatch({
    'When http-server is listening on 8080':{
        topic:function(){
            var server = httpServer.createServer({
                root:root,
                robots:true,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true'
                }
            });

            server.listen(8080);
            this.callback(null,server);
        }
    }
});