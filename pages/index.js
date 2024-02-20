// pages/index.js
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import OtpInput from "@/components/OtpInput";
import Image from "next/image";

const Index = () => {
  const [isopen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // State to store entered OTP

  const sendOtpToEmail = async () => { // Modified to remove parameter and use state directly
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      alert(data.message); // Show response message
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const verifyOtp = async () => { // Modified to remove parameters and use state directly
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      alert(data.message); // Show response message
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
  };

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOtpComplete = (otp) => {
    console.log("Entered OTP:", otp);
    setOtp(otp); // Store entered OTP in state
  };

  // Corrected onClick event handler for the "Send OTP" button
  const handleSendOtpClick = (e) => {
    e.preventDefault(); // Prevent form submission or any default action
    sendOtpToEmail();
  };

  // Add a new function for the "Confirm OTP" action
  const handleConfirmOtpClick = (e) => {
    e.preventDefault(); // Prevent form submission or any default action
    verifyOtp();
  };

  return (
    <div className={styles.uicontainer}>
      {isopen ? (
        <div className={styles.logincontainer}>
            <div className={styles.cancelbtn}>
            <MdCancel onClick={handleClick} />
          </div>
          
           <div className={styles.loginheading}>
            <h1>Login</h1>
            <p className={styles.crimsonText}>
              To save the progress.No spam ever
            </p>
          </div>
          <div className={styles.emailinput}>
          <input
            style={{
              backgroundColor: "#f4f4f4",
              padding:'1rem',
              width: "350px",
            }}
            type="email"
            name="email"
            placeholder="Enter your email Address"
            onChange={(e) => setEmail(e.target.value)} // Corrected onChange handler
          />
          <button onClick={handleSendOtpClick}>Send Otp</button>
          </div>
          <OtpInput onComplete={handleOtpComplete} />
          <div className={styles.loginbtn}>
            <button
              className={styles.greenbtn}
              onClick={handleConfirmOtpClick} // Add onClick event for OTP confirmation
            style={{width:'200px'}}
            >
              Continue
            </button>
          </div>
        </div>
      ):(
        // Show this when isopen is false
        <div className={styles.landingpage}>
          <div className={styles.navbar}>
            <div className={styles.heading}>Flip a coin</div>
            <div className={styles.landingpagebuttons}>
              <Link href="/" style={{ color: "black" }} onClick={handleClick}>
                Login
              </Link>
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
              Money is an interesting concept. It is very likely to be an
              important consideration in our day-to-day decisions, but it is
              also something only a few of us spend time learning about.
            </p>
            <div className={styles.desg}>
              <div>
                <Image src="/shapes.jpeg" width={185} height={134} />
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
              <button
                className={styles.greenbtn}
                style={{ width: "250px", borderRadius: "20px" }}
              >
                Get Started <FaArrowRight />
              </button>
            </Link>
            <Link href="/" style={{ color: "black" }}>
              Already a member
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
