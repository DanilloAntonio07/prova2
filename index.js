require('dotenv').config();
// criar uma variável e adicionar a ela o arquivo app.js
const app = require("./src/app");

// criar app.listen(porta)
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
})

//OK!
