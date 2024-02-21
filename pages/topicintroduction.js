import React from 'react'
import Heading from '@/components/Heading'
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../styles/Home.module.css";
const topicintroduction = () => {
  return (
    <div className={styles.uicontainer}>
     <div className={styles.topicintrocontainer}>
     <Heading/>
     <div className={styles.topicintroheading}>
      <Image src='/shapes1.png' width={100} height={100}/>
      <h2>Function of Money</h2>
      <p>Money, evolved from simple goods to bitcoin, serving two important functions - 'storing' and 'exchanging' value. We will understand why these functions are important with some simple examples.</p>
      </div>
      <div>
        <h4>Why learn this?</h4>
        <p>First few concepts in this learning experience, though appearing too theoretical, will help you build the foundational understanding about money. We realize the importance of good foundations at the time of unusual, novel challenges.</p>
      </div>
      <div className={styles.leftrightbuttons} style={{marginTop:'8rem'}}>
            <button className={styles.leftbutton}> <FaArrowLeft /> </button>
            <button className={styles.rightbutton}>Functions of Money <FaArrowRight /></button>
        </div>
    </div>
    </div>
  )
}

export default topicintroduction