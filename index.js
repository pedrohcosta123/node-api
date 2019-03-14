const express = require('express'); 
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando app
const app = express();
app.use(cors()); // para inicializar o cors
app.use(express.json()); // falando para o app aceitar requisições json


// chamando o model product
//const dbUrl = 'mongodb://localhost:27017/nodeapi';

//iniciando o DB
//mongoose.set ('useNewUrlParser', true) ;
//mongoose.set ('useFindAndModify', true) ;
//mongoose.set ('useCreateIndex', true);
//mongoose.createConnection (dbUrl);
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true}
);


requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3001);