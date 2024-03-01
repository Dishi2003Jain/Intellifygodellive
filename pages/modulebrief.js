import React from 'react'
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Heading from '@/components/Heading';
import Link from 'next/link';
const modulebrief = () => {
  return (
    <>
      <div className={styles.uicontainer}>
        <div className={styles.modulebriefcontainer}>
          <Heading/>
          <div className={styles.modulebriefheading}>
         <h2>Before we get in..</h2>
         <p>Circle,Square,Tools</p>
         </div>
          <div className={styles.modulebriefshapes}>
            <div className={styles.briefshapes}>
             <Image src='/briefcircle.jpeg' width={75} height={75}/>
             <p>You earn a circle for every principle or definition you learn. Principles are subjective, not necessarily grounded  in mathematics.</p>
            </div>
            <div className={styles.briefshapes}>
                <p>You earn a square for every mathematical concept you learn. Don’t worry, calculus is out of scope of this course.</p>
                <Image src='/briefsquare.jpeg' width={75} height={75}/>
            </div>

            <div className={styles.briefshapes}>
                <Image src='/brieftool.jpeg' width={75} height={75}/>
                <p>With each module, we unlock tools designed to make your finance journey simpler.</p>
            </div>
          </div>

          <div className={styles.leftrightbuttons} style={{marginTop:'8rem'}}>
            <button className={styles.leftbutton}> <FaArrowLeft /> </button>
            <Link href='/conceptlist' >
            <button className={styles.rightbutton}>Concepts <FaArrowRight /></button>
            </Link>
          </div>
          </div>
        </div>   
    </>
  )
}

export default modulebrief;