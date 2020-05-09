const {io} =require('../server');

io.on('connection',(client)=>{
    console.log('usuario conectado')
    // console.log(client);
    client.on('disconnect',()=>{
        console.log('Usuario deconectado')
    })

    //escuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);
        client.broadcast.emit('enviarMensaje',data)
        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIO BIEN!!!'
        //     });
        // }else{
        //     callback({
        //         resp:'TODO SALIO MAL!!!'
        //     });
        // }
        
    })

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

})