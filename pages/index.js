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

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleOtpComplete = (otp) => {
    console.log("Entered OTP:", otp);
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
            <label htmlFor="email">
              <h3>Email Address</h3>
            </label>
            <input
              style={{
                backgroundColor: "#f4f4f4",
                height: "53.3px",
                width: "350px",
              }}
              type="email"
              name="email"
              id=""
              placeholder="Enter your email Address"
            />
          </div>

          <h4
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "24px",
              font:"Crimson text"
            }}
          >
            Confirm Otp
          </h4>

          <OtpInput onComplete={handleOtpComplete} />
          <div className={styles.loginbtn}>
            <button
              className={styles.greenbtn}
              style={{
                width: "350px",
                height: "52.24px",
                borderRadius: "40px",
                border: ".05px",
                gap: "16px",
                top: "470px",
                padding: "10px, 24px, 10px, 24px",
                left: "14px",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
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
