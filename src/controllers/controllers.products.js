const productsServices = require("../services/products.services");

class ProductControllers {
  getAllProductsController = async (req, res) => {
    try {
      const products = await productsServices.getAllProductsService();

      if (!products || products.length === 0) {
        res.status(404).send({ message: "Produtos não encontrados." });
      } else {
        res.status(200).send(products);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "Problema ao encontrar os produtos." });
    }
  };

  getProductByIdController = async (req, res) => {
    try {
      const id = req.params.id;

      const product = await productsServices.getProductByIdService(id);

      if (!product) {
        res.status(404).send({ message: "Produtos não encontrados." });
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "Problema ao encontrar os produtos." });
    }
  };

  deleteProductByIdController = async (req, res) => {
    try {
      const id = req.params.id;

      const deletedProduct = await productsServices.deleteProductByIdService(
        id
      );

      if (!deletedProduct) {
        res.status(404).send({ message: "Produtos não encontrados." });
      } else {
        res.status(200).send(deletedProduct);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "Problema ao deletar o produto." });
    }
  };

  postProductController = async (req, res) => {
    try {
      //apagar tratativa
      if (!req.body.name || !req.body.price || !req.body.quantity) {
        res.status(400).send({ message: "Campo incompleto." });
      } else {
        const { name, price, quantity, brand, weight } = req.body;
        const body = {
          name: name,
          price: price,
          quantity: quantity,
          brand: brand ?? "",
          weight: weight ?? "",
        };

        const newProduct = await productsServices.postProductService(body);

        if (!newProduct) {
          res
            .status(400)
            .send({ message: "Problema ao postar o produto." });
        } else {
          res.status(200).send(newProduct);
        }
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "Problema ao postar o produto." });
    }
  };

  putProductController = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, quantity, brand, weight } = req.body;
      const body = {
        name: name,
        price: price,
        quantity: quantity,
        brand: brand,
        weight: weight,
      };

      const updatedProduct = await productsServices.putProductService(id, body);

      if (!updatedProduct) {
        res.status(404).send({ message: "Produto não encontrado." });
      }

      res.status(200).send(updatedProduct);
    } catch (err) {
      res
        .status(400)
        .send({ message: "Ocorreu um erro ao atualizar o produto." });
    }
  };
}

module.exports = controllers.products = new ProductControllers();