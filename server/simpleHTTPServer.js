const http = require('http');
const port = 5000;

const requestHandler = (request, response) => {
  console.log('%c⧭', 'color: #f2ceb6', request.url)
  response.end("Hola desde el server");

}

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if(err) console.error("algo ha pasado")

  console.log(`Server levantado en el port: ${port}`)
})