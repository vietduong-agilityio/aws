export class ProductController {
  constructor(app) {
    this.productModel = app.db.models.Products;

    this.getAllProducts = this.getAllProducts.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  getAllProducts(req, res) {
    return this.productModel.findAll({
      where: { user_id: req.user_id }
    }).then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  }

  createProduct(req, res) {
    req.body.user_id = req.user_id;

    const product = {
      title: req.body.title,
      price: req.body.price,
      user_id: req.user_id
    };

    return this.productModel.create(product)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  }

  getProduct(req, res) {
    return this.productModel.findOne({
      where: {
        id: req.params.id,
        user_id: req.user_id
      }
    }).then(result => {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  }

  updateProduct(req, res) {
    const product = {
      title: req.body.title,
      price: req.body.price
    };

    return this.productModel.update(product, {
      where: {
        id: req.params.id,
        user_id: req.user_id
      }
    }).then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  }

  removeProduct(req, res) {
    return this.productModel.destroy({
      where: {
        id: req.params.id,
        user_id: req.user_id
      }
    }).then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  }
}