"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/css/shop_product.module.scss";
import Link from "next/link";

const Products = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(product.productFrontImage.url);

  const handleMouseEnter = () => {
    setImageSrc(product.productBackImage.url);
  };

  const handleMouseLeave = () => {
    setImageSrc(product.productFrontImage.url);
  };

  return (
    <div className={styles.product_container}>
      <Link href={`/pages/product/${product.id}`} key={product.id} className={styles.product_link}>
        <div
          className="product_image_front"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={imageSrc} alt="" height="200" width="200" layout="responsive" />
          <div className={styles.color_price}>
            <h3 className="type">{product.category} - {product.paintCombo}</h3>
            <p>{product.color}</p>
            <p>DKK {product.price}</p>
            <p>size: {product.size}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
