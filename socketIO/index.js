const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html');
});

io.on('connection',(socket)=>{
    //Quand un utilisateur se connectera sur l'application, on affiche ce message dans la console
    console.log('Un utilisateur connecté');
    socket.on('disconnect',() => {
        console.log('Un utilisateur s\'est déconnecté');
    });
    //Quand un utilisateur va envoyer un message (voir le script dans index.html)
    socket.on('chat message',(msg)=>{
        //Fonction emit pour mettre d'envoyer le message à tout le monde
        io.emit('chat message', msg);
        //On va récupérer le message dans le script dans index.html
    });
});

http.listen(3000,()=> {
    console.log('listening on *:3000');
});