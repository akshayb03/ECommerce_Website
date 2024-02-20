const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
      if (err) {
        res.json({ auth: false });
      } else {
        console.log("result", result);
        next();
      }
    });
  } catch (error) {
    res.json({ auth: false });
  }
};

module.exports = authentication;
