import Image from "next/image";
import styles from "@/app/css/shop_product.module.scss"

const Products = ({ product }) => {
  console.log(product);

  return (
    <div className={styles.product_container}>
      <h4 className="type">{product.type}</h4>
      <div className="product_image_front">
        <Image src={product.product_image_front} alt="" height="170" width="170" />
        <div className="color_price">
          <p>{product.color}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;