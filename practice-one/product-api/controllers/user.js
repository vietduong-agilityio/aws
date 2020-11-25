import auth from '../configs/aws-auth';
import authentication from '../libs/authentication';

export class UserController {
  constructor(app) {
    this.userModel = app.db.models.Users;

    this.signUp = this.signUp.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  signUp(req, res) {
    // Sign up User with AWS Cognito
    return auth.signUp(req.body.email, req.body.password).then(data => {
      const user = {
        id: data.userSub,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };

      // Add User to DB
      this.userModel.create(user)
        .then(result => res.json(result))
        .catch(error => {
          res.status(401).json({ error: error.message });
        });
    }).catch(err => {
      res.status(412).json({ error: err.message });
    });
  }

  verifyUser(req, res) {
    return auth.confirmSignUp(req.body.email, req.body.code).then(data => {
      res.json(data);
    })
      .catch(err => res.status(401).json({
        error: err.message
      }));
  }

  signIn(req, res) {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;

      return auth.signIn(email, password).then(data => {
        res.json(data.signInUserSession.accessToken);
      })
        .catch(err => {
          res.status(401).json({
            error: err.message
          });
        });
    } else {
      return res.sendStatus(401);
    }
  }

  getUser(req, res) {
    return this.userModel.findById(req.user_id, {
      attributes: ['id', 'name', 'email']
    }).then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ error: error.message });
      }
      );
  }
}