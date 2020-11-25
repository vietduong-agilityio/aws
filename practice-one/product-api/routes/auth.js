import jwt from 'jwt-simple';
import auth from '../configs/aws-auth';
import { UserController } from '../controllers/user';

module.exports = app => {
  const userController = new UserController(app);

  /**
   * @api {post} /sign-in Authentication Token
   * @apiGroup Credentials
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} Input
   *  {
   *    'email': 'viet@gmail.com',
   *    'password': '123456'
   *  }
   * @apiSuccess {String} token Token of authenticated user
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *  {'token': 'xyz.abc.123.hgf'}
   * @apiErrorExample {json} Authentication error
   *   HTTP/1.1 401 Unauthorized
   */
  app.post('/signin', userController.signIn);

  app.post('/signup', userController.signUp);

  app.post('/verify', userController.verifyUser);
};