import React from 'react'
import styles from "../styles/Home.module.css";
import Heading from '@/components/Heading';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
const Progressslide = () => {
  return (
    <div className={styles.uicontainer}>
        <div className={styles.progressslidecontainer}>
           <Heading/>
           <div className={styles.progressstatus}>
            <Image src='/progresscircle.png' width={100} height={100}/>
            <p>Congratulations! You earned a circle.</p>
           </div>
           <div className={styles.progressshape}>
            <Image src='/progresscircle.png' width={50} height={50}/>
            <Image src='/progresssquare.png' width={50} height={50}/>
            <Image src='/progresstool.png' width={50} height={50}/>
           </div>

           <div className={styles.leftrightbuttons} style={{marginTop:'10rem'}}>
            <button className={styles.leftbutton}> <FaArrowLeft /> </button>
            <button className={styles.rightbutton}>Functions of Money <FaArrowRight /></button>
          </div>
        </div>
    </div>
  )
}

export default Progressslide
