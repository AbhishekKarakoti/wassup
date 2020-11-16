const Express=require('express');
const socket=require('socket.io');
const app=Express();

app.use(Express.static('static'));
const port=process.env.PORT || 5000;
const server=app.listen(port,()=>{
    console.log('server has started');
})

const io=socket(server);

io.on('connection',(socket)=>{
    
    console.log('connection established.......');

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })

})