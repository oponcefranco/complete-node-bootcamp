const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const testEmitter = new Sales();

testEmitter.on("newSale", () => {
    console.log("There was a new sale!");
});

testEmitter.on("newSale", () => {
    console.log("Customer name: Jonas");
});

testEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items left in stock.`)
});

testEmitter.emit("newSale", 9);

//////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request 1 received!");
    console.log(req.url);
    res.end("Request received");
});

server.on("request", (req, res) => {
    console.log("Another request 😃");
});

server.on("close", () => {
    console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests...");
});