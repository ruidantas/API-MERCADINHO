module.exports = (req, res, next) => {
    if (
      !req.body.name &&
      !req.body.price &&
      !req.body.quantity &&
      !req.body.brand &&
      !req.body.weight
    ) {
      return res.status(400).send({ message: "Campo incompleto." });
    }
  
    if (!req.params.id || req.params.id === "") {
      return res.status(400).send({ message: "ID não encontrado." });
    }
  
    return next();
  };