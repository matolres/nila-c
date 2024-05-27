import Image from "next/image";
import styles from "@/app/css/shop_product.module.scss"


const Products = ({ product }) => {
console.log("products page:", product)

  return (
    
    <div className={styles.product_container}>
      <h4 className="type">{product.category}</h4>
      <div className="product_image_front">
        <Image src={product.productFrontImage.url} alt="" height="170" width="170" />
        <div className="color_price">
          <p>{product.color}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;