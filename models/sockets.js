
class Sockets {
    constructor(io){
        this.io = io;

        this.socketsEvents();
    }

    socketsEvents(){
        this.io.on('connection', (socket) => {
  
            socket.emit('msj-bienvenida',({
                msg:'Hola mundo',
                date: new Date()
            }));
        
            socket.on('msj-cliente',data =>{
                console.log(data);
                this.io.emit('mensaje-to-server', data)
            })
          
        });
    }
}

module.exports = Sockets