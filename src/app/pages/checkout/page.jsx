"use client";
import React, { useState } from 'react';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import Link from 'next/link';
import styles from '@/app/css/checkout.module.scss';
import Menu from '@/app/components/menu';
import Image from 'next/image';
import Collapsible from 'react-collapsible';

const Checkout = () => {
  const { bag } = useShoppingBag();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: ''
    });
    // Set submitted to true to show the confirmation message
    setSubmitted(true);
    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
    <Menu
    menuIconColor="red"
    closingMenuIconColor="#00F135"
    moveMeColor="#00F135"
    rectColor="red"
    logoColor="red"
    logoOverlayColor="#00F135"
    lineColor="red"
    lineOverlayColor="#00F135"
    cartIconColor="red"
    cartOverlayColor="#00F135"
    itemTextColor="#00F135"
    />
    <div className={styles.container}>
      <div className={styles.order_summary_container}>
      <Collapsible
          className={styles.triggers}
          trigger='Show order Summary'
          triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '15px' }}
          contentContainerTagName="article"
          transitionTime={300}
          easing="ease-in-out"
          open={false}
          classParentString={styles.MyCollapsible}
        >
      <ul>
        {bag.map(({ product }) => (
          <li key={product.id} className={styles.li_container}>
            <Image 
            src={product.productFrontImage.url} alt="" height="70" width="70"
            />
            <div>
              <h3>{product.category} - {product.paintCombo}</h3>
              <p>{product.size}</p>
            </div>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      </Collapsible>
      </div>
      <div className={styles.total}>
        <h2>Total</h2>
        <h2>DKK {bag.reduce((total, { product }) => total + product.price, 0)}</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.checkoutForm}>
        <h3>Contact Information</h3>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <h3>Delivery Address</h3>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <h3>Payment Details</h3>
        <div className={styles.formGroup}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cardExpiry">Card Expiry</label>
          <input
            type="text"
            id="cardExpiry"
            name="cardExpiry"
            value={formData.cardExpiry}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cardCVC">CVC</label>
          <input
            type="text"
            id="cardCVC"
            name="cardCVC"
            value={formData.cardCVC}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.placeOrderButton}>Place Order</button>
        {submitted && <p className={styles.confirmationMessage}>Message has been sent</p>}
      </form>

    </div>
    </>
  );
};

export default Checkout;
