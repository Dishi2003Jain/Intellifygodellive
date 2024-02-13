// components/OtpInput.js

import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; // Create a CSS module for styling

const OtpInput = ({ onComplete }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // If all OTP digits are entered, trigger the onComplete callback
    if (newOtp.every((digit) => digit !== '')) {
      const enteredOtp = newOtp.join('');
      onComplete(enteredOtp);
    }
  };

  const handleBackspace = (index) => {
    if (index > 0 && otp[index] === '') {
      // Move cursor to the previous input field on backspace
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div className={styles.otpContainer}>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyUp={() => handleBackspace(index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
