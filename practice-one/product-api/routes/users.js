import auth from '../configs/aws-auth';
import authentication from '../libs/authentication';
import { UserController } from '../controllers/user';

module.exports = app => {
  const userController = new UserController(app);
  const Users = app.db.models.Users;

  app.route('/user')
    /**
     * @api {get} /user Return the authenticated user's data
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *   {'Authorization': 'JWT xyz.abc.123.hgf'}
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} name User name
     * @apiSuccess {String} email User email
     * @apiSuccessExample {json} Success
        * HTTP/1.1 200 OK
        * {
          * 'id': 1,
          * 'name': 'John Connor',
          * 'email': 'john@connor.net'
        * }
     * @apiErrorExample {json} Find error
     *    HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
      authentication(req, res, () => {
        return userController.getUser(req, res);
      });
    });

  /**
   * @api {post} /users Register a new user
   * @apiGroup User
   * @apiParam {String} name User name
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} Input
   *  {
   *    'name': 'John Connor',
   *    'email': 'john@connor.net',
   *    'password': '123456'
   *  }
   * @apiSuccess {Number} id User id
   * @apiSuccess {String} name User name
   * @apiSuccess {String} email User email
   * @apiSuccess {String} password User encrypted password
   * @apiSuccess {Date} updated_at Update's date
   * @apiSuccess {Date} created_at Register's date
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      'id': 1,
   *      'name': 'John Connor',
   *      'email': 'john@connor.net',
   *      'password': '$2a$10$SK1B1',
   *      'updated_at': '2016-02-10T15:20:11.700Z',
   *      'created_at': '2016-02-10T15:29:11.700Z',
   *    }
   * @apiErrorExample {json} Register error
   *    HTTP/1.1 412 Precondition Failed
   */
  app.post('/users', userController.signUp);
};