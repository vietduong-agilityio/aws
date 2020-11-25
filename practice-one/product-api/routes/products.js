import authentication from '../libs/authentication';
import { ProductController } from '../controllers/product';

module.exports = app => {
  const productController = new ProductController(app);

  app.route('/products')
    .all(authentication)
    /**
     * @api {get} /products List the user's products
     * @apiGroup Products
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {'Authorization': 'JWT xyz.abc.123.hgf'}
     * @apiSuccess {Object[]} products list
     * @apiSuccess {Number} products.id Product id
     * @apiSuccess {String} products.title Product title
     * @apiSuccess {Boolean} products.price Product is price?
     * @apiSuccess {Date} products.updated_at Update's date
     * @apiSuccess {Date} products.created_at Register's date
     * @apiSuccess {String} products.user_id Id User
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      'id': 1,
     *      'title': 'Study',
     *      'price': 10
     *      'updated_at': '2016-02-10T15:46:51.778Z',
     *      'created_at': '2016-02-10T15:46:51.778Z',
     *      'user_id': 1-23-45
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 412 Precondition Failed
     */
    .get(productController.getAllProducts)
    /**
     * @api {post} /products Register a new product
     * @apiGroup Products
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {'Authorization': 'JWT xyz.abc.123.hgf'}
     * @apiParam {String} title Product title
     * @apiParam {Number} price Product price
     * @apiParamExample {json} Input
     *    {
     *      'title': 'Study',
     *      'price: 20'
     *    }
     * @apiSuccess {Number} id Product id
     * @apiSuccess {String} title Product title
     * @apiSuccess {Number} price Product price
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccess {String} user_id User id
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      'id': 1,
     *      'title': 'Study',
     *      'price': 20,
     *      'updated_at': '2016-02-10T15:46:51.778Z',
     *      'created_at': '2016-02-10T15:46:51.778Z',
     *      'user_id': 1-23-45
     *    }
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 412 Precondition Failed
     */
    .post(productController.createProduct);

  app.route('/products/:id')
    .all(authentication)
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.removeProduct);
};