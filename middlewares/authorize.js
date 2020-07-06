const jwt = require('jsonwebtoken');

function authorize() {
  return (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
          return res.status(401).json({status: 'error', message: 'Failed to authenticate token.'});
        } else {
          req.decoded = decoded;
          next();                    
        }
      });
    }

    return res.status(401).json({
      status: 'error',
      message: 'No token provided.',
      data: {}
    });
  };
}

module.exports = authorize;