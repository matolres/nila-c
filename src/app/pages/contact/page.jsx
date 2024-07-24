"use client"

import Menu from "@/app/components/menu"
import styles from "@/app/css/contact.module.scss"
import { useState } from 'react';
import { usePageColor } from '@/app/components/page_color_context';
import { useEffect } from 'react';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const [submitted, setSubmitted] = useState(false);
      const { setColors } = usePageColor();

      useEffect(() => {
          setColors({ text: 'yellow', background: 'blue' });
    
          return () => setColors({ text: 'defaultTextColor', background: 'defaultBackgroundColor' });
      }, [setColors]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      };
    return(
        <>
        <Menu
            primary="yellow"
            secondary="blue"
        />
        <div className={styles.background}></div>
        <main className={styles.main_container}>
            
            <div className={styles.splash}>
          <video className={styles.video} autoPlay loop muted playsInline  layout='responsive' 
          >
              <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <h1>WHAT IS ON YOUR MIND ?</h1>  
      </div>
      <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input className={styles.input_text}
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
          <input className={styles.input_text}
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
          <input className={styles.input_text}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea className={styles.input_text}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          <div className={styles.submit_content}>
            <span className={styles.first}>Submit</span>
            <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            
          </div>
          <div className={styles.submit_overlay}>
          <span className={styles.second}>Submit</span>
          <svg className={styles.arrow_overlay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </div>
          
        </button>
      </form>
      {submitted && <p className={styles.confirmationMessage}>Message has been sent</p>}
    </div>


        </main>
        </>
    )
}