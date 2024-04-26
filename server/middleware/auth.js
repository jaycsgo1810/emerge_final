const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, '4c34ac9c634731396841e689338a9ec64e3727a6d11ee7270b7a0ee151de7718028d7320e8db815b48059c6936a76e25eaca5fa7331485363c93870a43bc2534f5e81095ef14d04b69881916e071a6a353fddfc1a007e583d3e2f0aa642759816913ff5d84ab0f804c7e8807a9398632462a8ed482c315e8c9a037404f8f20ddf3c1941e65f60cd7f404ff1b2c01613cc801e5b3025adf06ebdaa1afaf6c0007516bb1f117c88e2e67669ee9b73d51e0750a8137b4a2364ec0513888a35ce667fb96dcd653f96bc3911d48d59d19410a95167cb208b8985427c690a0d2441a64a4c5ae7bd966f94bb76eda9a77169910787d7e3c4df44f35d2c9a944611fdeee');
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
