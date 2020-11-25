const db = require('../db');

const ProductModel = db.models.Products;

module.exports = class ProductDataSource {
  constructor() {}

  listProduct(offset, limit) {
    return ProductModel.findAll({
      offset,
      limit
    });
  }

  getProduct(id) {
    return ProductModel.findById(id);
  }

  addProduct(product) {
    return ProductModel.create(product);
  }

  updateProduct(id, product) {
    return ProductModel.update(product, {
      where: {
        id: id
      }
    });
  }

  removeProduct(id) {
    return ProductModel.destroy({
      where: {
        id: id
      }
    });
  }
};