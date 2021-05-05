<<<<<<< HEAD

=======
>>>>>>> 940772f792731d9020da111f4db0f8402da80bf8
const socket=io();

const message=document.getElementById('message')
const handle=document.getElementById('handle')
const output=document.getElementById('output')
const feedback=document.getElementById('feedback')
const btn=document.getElementById('send')

btn.addEventListener('click',()=>{
    
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
    handle.setAttribute("disabled","disabled");
    message.value="";
})

message.addEventListener('keypress',()=>{
   socket.emit('typing',handle.value);
})



//for displaying message
socket.on('chat',(data)=>{
feedback.innerHTML="";
output.innerHTML+=`<p><strong>${data.handle}:</strong> ${data.message}</p>`;

})
socket.on('typing',(data)=>{
    
    feedback.innerHTML=`<p><em>${data}</em> is typing......</p>`;
})
