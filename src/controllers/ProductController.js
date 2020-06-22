const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query; // Serve para quando eu tiver ?page=2 no link ele me retorna apenas a pagina 2
    const products = await Product.paginate({}, { page, limit: 10 }); // O await faz com que ele execute a proxima linha só depois de ele conseguir buscar os registros do bd
    return res.json(products);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
