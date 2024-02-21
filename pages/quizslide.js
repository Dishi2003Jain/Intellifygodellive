import React from 'react'
import Heading from '@/components/Heading'
import styles from "../styles/Home.module.css";
const quizslide = () => {
  return (
    <div className={styles.uicontainer}>
        <div className={styles.quizslidecontainer}>
            <Heading/>
            <h2>Quiz Question</h2>
            <div className={styles.quizquestion}>
                <p>We are social creatures, depending a lot on one another for things or services. I can hopefully help you learn some personal finance whereas you can help by doing whatever you do the best?</p>
                <div className={styles.quizoption}>
                   <p className={styles.option}>At the beginning</p>
                   <p className={styles.option}>In the middle</p>
                   <p className={styles.option}>At the end</p>
                   <p className={styles.option}>Any time</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default quizslide