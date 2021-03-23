const express = require('express');
const app = express();
const uniqueid = require('uniqid');
const cors = require('cors')
const server = require('http').Server(app);
const io = require('socket.io')(server,{
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }});

app.use(cors())


app.get('/', (req, res)=>{
    return res.status(200).json({
        message: "callie api",
        status: 200
    })
})

app.get('/generate-room', (req, res)=>{
    return res.status(200).json({
        message: 'room id generated',
        room_id: uniqueid('callie-')
    })
})
io.on('connection', (socket)=>{
    let count = 0;
    console.log(count++, 'one connection connected')
    socket.on('join-room', ({roomId, userId})=>{
        console.log({roomId, userId})
    })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>{
    console.log('app started')
})