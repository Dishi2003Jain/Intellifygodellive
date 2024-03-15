import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

const Index = () => {
  const [modalState, setModalState] = useState({ isOpen: false, isLogin: true });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const openModal = (isLogin = true) => () => {
    setModalState({ isOpen: true, isLogin });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, isLogin: modalState.isLogin });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formType = modalState.isLogin ? 'login' : 'register';
    const url = `/api/${formType}`;
    const formData = {
      email,
      password,
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(`Error: ${data.error || 'Failed to process request'}`);
      } else {
        alert(`${formType === 'register' ? 'Registration' : 'Login'} successful`);
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }

    setEmail('');
    setPassword('');
  };
  
  
  return (
    <div className={styles.uicontainer}>
      <div className={styles.landingpage}>
        <div className={styles.navbar}>
          <div className={styles.heading}>Flip a coin</div>
          <div className={styles.landingpagebuttons}>
            <div style={{ color: "black", cursor: "pointer" }} onClick={openModal(true)}>
              Login
            </div>
            <Link href="/coursehome">
              <button className={styles.greenbtn}> Get Started </button>
            </Link>
          </div>
        </div>
        <div className={styles.secondcontainer}>
          <div className={styles.title}>
            <h2>Master Your</h2>
            <h1>Personal Finances</h1>
          </div>
        </div>
        <div className={styles.paragraphs}>
          <p className={styles.justifytext}>
            Money is an interesting concept. It's very likely to be an
            important consideration in our day-to-day decisions, but it's
            also something only a few of us spend time learning about.
          </p>
          <div className={styles.desg}>
            <div>
              <Image src="/shapes1.png" width={185} height={134} />
            </div>
          </div>
          <p className={styles.justifytext}>
            While most of us worry about coupons, missing out on an IPO, and
            whatnot, we generally let loose the bigger picture from our minds.
          </p>
          <p className={styles.justifytext}>
            This is exactly what we wanted to do with this learning
            experience... paint a bigger picture as we share some mental
            models that we have acquired over years of managing our own
            personal finances. Let's get into it!
          </p>
        </div>
        <div className={styles.grpbtn}>
          <Link href="/coursehome">
            <button className={styles.greenbtn} style={{ width: "250px", borderRadius: "20px" }}>
              Get Started <FaArrowRight />
            </button>
          </Link>
          <Link href="/" style={{ color: "black" }}>
            Already a member
          </Link>
        </div>
      </div>
      {modalState.isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.registerheading}>
              <h1 className={styles.registerheadingText}>{modalState.isLogin ? "Login to Proceed" : "Create your account"}</h1>
              <MdCancel className={styles.modalCloseIcon} onClick={closeModal} />
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}  required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className={styles.subbutton}>
                <button type="submit" className={styles.submitBtn}>{modalState.isLogin ? 'Login' : 'Register'}</button>
                {modalState.isLogin ? (
                  <div className={styles.switchModal}>Don't have an account?<a style={{ cursor: 'pointer' }} onClick={openModal(false)}> Register</a></div>
                ) : (
                  <div className={styles.switchModal}>Already have an account?<a style={{ cursor: 'pointer' }} onClick={openModal(true)}> Log in</a></div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
