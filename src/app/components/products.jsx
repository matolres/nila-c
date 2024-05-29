import Image from "next/image";
import styles from "@/app/css/shop_product.module.scss"


const Products = ({ product }) => {
console.log("products page:", product)

  return (
    
    <div className={styles.product_container}>
      
      <div className="product_image_front">
        <Image src={product.productFrontImage.url} alt="" height="170" width="170" layout="responsive"  />
        <div className="color_price">
        <h3 className="type">{product.category} - {product.paintCombo}</h3>
          <p>{product.color}</p>
          <p>DKK {product.price}</p>
          <p>size: {product.size}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;