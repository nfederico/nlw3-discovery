const express = require('express');
const path = require ('path');
const pages = require('./pages');


const server = express();
                                     //configure view engine
server
.use(express.urlencoded({extended:true}))// to use the body of the req
.use(express.static('public'))
.set('views',path.join(__dirname,"views"))
.set('view engine','hbs');

server.get('/', pages.index);
server.get('/orphanages', pages.orphanages);
server.get('/orphanage', pages.orphanage);
server.get('/create-orphanage', pages.createOrphanages);
server.post('/save-orphanage', pages.saveOrphanage);



server.listen(5500);
