import config from '../configs/aws-config';

module.exports = (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const request = require('request');
  const jwkToPem = require('jwk-to-pem');

  request({
    url: `https://cognito-idp.${config.cognito.REGION}.amazonaws.com/${config.cognito.USER_POOL_ID}/.well-known/jwks.json`,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var pems = {};
      var keys = body['keys'];
      for (var i = 0; i < keys.length; i++) {
        //Convert each key to PEM
        var key_id = keys[i].kid;
        var modulus = keys[i].n;
        var exponent = keys[i].e;
        var key_type = keys[i].kty;
        var jwk = { kty: key_type, n: modulus, e: exponent };
        var pem = jwkToPem(jwk);
        pems[key_id] = pem;
      }
      // validate the token
      var decodedJwt = jwt.decode(req.headers.authorization, { complete: true });
      if (!decodedJwt) {
        console.log('Not a valid JWT token');
        res.json(403, 'Not a valid JWT token');
      }

      var kid = decodedJwt.header.kid;
      var pem = pems[kid];
      if (!pem) {
        console.log('Invalid token');
        res.json(403, 'Invalid token');
      }

      jwt.verify(req.headers.authorization, pem, function (err, payload) {
        if (err) {
          console.log('Invalid Token.');
          res.json({
            'err': 'invalid token'
          });
        } else {
          console.log('Valid Token.');
          req.user_id = payload.sub;
          // res.json({
          //   'data': payload
          // });
          next();
        }
      });
    } else {
      console.log('Error! Unable to download JWKs');
      res.json({
        'err': 'Error! Unable to download JWKs'
      });
    }
  });
};