const express = require('express');
const http = require('http')
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT; 

        //Https server 
        this.server = http.createServer(this.app);

        //Configuración del socket
        this.io = socketio(this.server)
    }

    configurarSockets(){
        new Sockets(this.io);
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    execute() {

        this.middlewares();

        this.configurarSockets();

        this.server.listen(this.port, () =>{
            console.log('La app está corriendo en el puerto: ' + this.port);
        })
    }
}

module.exports = Server;