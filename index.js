const express = require('express'); 
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// iniciando app
const app = express();

// chamando o model product
requireDir('./src/models');
const dbUrl = 'mongodb://localhost:27017/nodeapi'

//iniciando o DB
mongoose.set ('useNewUrlParser', true) 
mongoose.set ('useFindAndModify', true) 
mongoose.set ('useCreateIndex', true)

conn = mongoose.createConnection (dbUrl)


const Product = conn.model('Product'); 
// primeira rota
app.get('/',(req,res)=> {
	Product.create({
		title: 'React Native',
		Description: 'Build native apps with React',
		url:'http://github.com/facebook/react-native'
	})
	return res.send("hellow teste!");
});


app.listen(3001);