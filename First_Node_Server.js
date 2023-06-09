

const http=require('http');

const Giannis_server=http.createServer((req,res) => {
    res.end('Hello,World');
});

Giannis_server.on('connection',(soccet) => {
    console.log('New connection on Giannis Server:))');
    console.log('Hello WORLD!');
    
});

Giannis_server.listen(3000); 

console.log('Waiting for connection...');



