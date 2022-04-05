const ws = require('ws')
const prompt = require('prompt-sync')({ sigint: true })

const client = new ws.WebSocket("ws://localhost:8089")

client.on('open', () => {
    do {
        message = prompt("type a message: ")
        client.send(message)
    } while (message != 'k')
})

client.on('message', data => {
    console.log("%s", data)
})
