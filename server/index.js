const app = require('express')();
const port = 5000;

app.get('/', (req, res) => {
  res.send("Hola a todos");
})

app.listen(port, err => {
  if(err) console.log("Hubo un error: ", err)
  console.log(`Server en el puerto: ${port}`);
})