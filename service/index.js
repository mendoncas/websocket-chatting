const ws = require('ws')
const server = new ws.Server({
    port: 8089
})

let sockets = []
server.on('connection', (socket) => {
    sockets.push(socket)

    socket.on('message', (msg) => {
        console.log(msg.toString())
        sockets.forEach(s => s.send(msg))
    })

    socket.on('close', () => {
        sockets = sockets.filter(s => s !== socket)
        console.log("limpando conexões ...")
    })

})