import React from 'react'
import Heading from '@/components/Heading'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const contentslide = () => {
  return (
    <div className={styles.uicontainer}>
        <div className={styles.contentslidecontainer}>
            <Heading/>
             <h2>Exchanging values</h2>
             <div className={styles.contentsld}>
                <p>We are social creatures, depending a lot on one another for things or services. I can hopefully help you learn some things about personal finance while you can help by doing whatever you do the best, maybe coding, cooking amazing food, or what not. 
               </p>
               <Image src='/contentimage.png' width={125} height={125}/>
               <p>But, for a fact, I don't need you to code for me or make me fine dinner. Even if I did, you might not want to do it for me. Even if we agreed to do this, how many lines of code do you need to write in exchange of a personal finance course? There we go, we need to figure how do we 'exchange' the 'value' we both bring on the table?</p>
             </div>

             <div className={styles.leftrightbuttons} style={{marginTop:'5rem'}}>
            <button className={styles.leftbutton}> <FaArrowLeft /> </button>
            <button className={styles.rightbutton}>Functions of Money <FaArrowRight /></button>
        </div>
        </div>
    </div>
  )
}

export default contentslide