"use client"

import Menu from "@/app/components/menu"
import Footer from "@/app/components/footer"
import styles from "@/app/css/contact.module.scss"
import { useState } from 'react';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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
          message: ''
        });
        // Set submitted to true to show the confirmation message
        setSubmitted(true);
        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      };
    return(
        <>
        <Menu/>
        <main className={styles.main_container}>
            
            <div className={styles.splash}>
          <video className={styles.video} autoPlay loop muted playsInline  layout='responsive' 
          >
              <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <h1>WHAT´S ON YOUR MIND ?</h1>  
      </div>
      <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
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
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {submitted && <p className={styles.confirmationMessage}>Message has been sent</p>}
    </div>


        </main>
        </>
    )
}