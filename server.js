/**
 * Created by Peter on 25/06/2016.
 */
'use strict';

var koa = require('koa');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');

var app = koa();

app.use(logger());
app.use(serve('../public',{maxage: 6}));


app.use(compress({
    filter: function (content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
}));

app.use(serve('./client/public/'));

app.listen(3000);

console.log('listening on port 3000');