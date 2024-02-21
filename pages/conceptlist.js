import React from 'react'
import Heading from '@/components/Heading'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const conceptlist = () => {
  return (
    <div className={styles.uicontainer}>
     <div className={styles.conceptlistcontainer}>
        <Heading/>
        <div className={styles.conceptlistcontent}>
            <h2>Concepts in this module</h2>
            <div className={styles.conceptlist}>
                <Image src='/briefcircle.jpeg' width={15} height={15}/>
                <p>Functions of Money</p>
            </div>
            <div className={styles.conceptlist}>
                <Image src='/briefcircle.jpeg' width={15} height={15}/>
                <p>Salability</p>
            </div>
            <div className={styles.conceptlist}>
                <Image src='/briefcircle.jpeg' width={15} height={15}/>
                <p>Hard Money</p>
            </div>
            <div className={styles.conceptlist}>
                <Image src='/briefcircle.jpeg' width={15} height={15}/>
                <p>Time Preference</p>
            </div>

        </div>
        <div className={styles.leftrightbuttons} style={{marginTop:'25rem'}}>
            <button className={styles.leftbutton}> <FaArrowLeft /> </button>
            <button className={styles.rightbutton}>Functions of Money <FaArrowRight /></button>
        </div>
     </div>
    </div>
  )
}

export default conceptlist