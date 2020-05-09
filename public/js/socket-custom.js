var socket = io();
        
socket.on('connect',function(){
    console.log('conectado al servidor');
})
//escuchar info
socket.on('disconnect',function(){
    console.log('perdida conexion con el servidor')
})
//Enviar indo
socket.emit('enviarMensaje',{
    usuario: 'yonny',
    mensaje: 'Hola Mundo'
},function(resp){
    console.log('respuesta server : ',resp);
});

socket.on('enviarMensaje',function(data){
    console.log(data);


})