import Image from "next/image";
import styles from "@/app/css/shop_product.module.scss"

const Product = ({ type, paint_combo, color, price, product_image_front, product_image_back, model_image }) => {
  console.log(type);
  console.log(paint_combo);
  console.log(color);
  console.log(price);
  console.log(product_image_front);
  console.log(product_image_back);
  console.log(model_image);

  return (
    <div className={styles.product_container}>
      <h4 className="type">{type}</h4>
      <div className="product_image_front">
        <Image src={product_image_front} alt="" height="170" width="170" />
        <div className="color_price">
          <p>{color}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;