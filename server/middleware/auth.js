const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, '0d8ebf4d802272c435d8e0a67021fae4e8d776733cccc6b1044e4a830802e324f1abcc0a28f1fe9713a7b0882e8d02463821528712c80f6af67cb948e9e6a5119aaefd0385c17fcad6382168e5fc3ea8fb6970be62e13c60d9fe02d41002165094c1d88e9df015ddfc322a4a43677cb71bd6eadd4dd41bd9af9cedc411360d62');
    if (!verifyToken) {
      return res.status(401).send("Token error");
    }
    req.locals = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = auth;
