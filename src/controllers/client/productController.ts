import { Request, Response } from "express";
import { getProductById } from "services/client/productService";

const getPageDetailProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(+id);
  return res.render("client/product/detailProduct.ejs", {product});
};

export { getPageDetailProduct };
