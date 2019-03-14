const mongoose = require("mongoose");
const Product = mongoose.model('Product');
module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({},{page,limit:10});

        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);

    },

    async delete(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send("produto foi excluido com sucesso!");

    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        // new: true retorna o produto atualizado sem ele o produto não retorna atualizado no return

        return res.json(product);

    },
    
    async  store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    }
}

