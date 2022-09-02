module.exports = (req, res, next) => {
    if (!req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(400).send({ message: "Campo incompleto" });
    }
  
    return next();
  };