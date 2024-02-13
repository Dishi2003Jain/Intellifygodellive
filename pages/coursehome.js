import React from 'react'
import styles from '../styles/Home.module.css';
import CircularProgressBar from '@/components/CircularProgress';
import { FaPlayCircle } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
const coursehome = () => {
    const completionPercentage = 60;
  return (
    <div className={styles.uicontainer}>
        <div className={styles.coursehomepage}>
       <div>
        <h1 style={{color:'#2A721E'}}>Mastering Personal Finance</h1>
        </div>
        <div className={styles.progress}>
            <div className={styles.progressdetails}>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallcircle}></div>
                8 more to collect
            </div>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallsquare}></div>
                8 more to collect
            </div>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallvector}></div>
                2 more to collect
            </div>
            </div>
            <CircularProgressBar percentage={completionPercentage}/>
        </div>
        <div className={styles.secondcoursehome}>
            <div>
                <div className={styles.courseitem}>
                <MdDoneOutline/>
                <div>
                    <h3>Function of Money</h3>
                    <p>Money as a Medium of Exchange and Store of Value, Salability of Money, Hard Money</p>
                    </div>
                    <div className={styles.smallobject}>
                        <div className={styles.smallcircle}></div>
                        <div className={styles.smallsquare}></div>
                        <div className={styles.smallvector}></div>
                    </div>
                </div>
                <div className={styles.courseitem}>
                <FaPlayCircle />
                <div>
                    <h3>Function of Money</h3>
                    <p>Money as a Medium of Exchange and Store of Value, Salability of Money, Hard Money</p>
                    </div>
                    <div className={styles.smallobject}>
                        <div className={styles.smallcircle}></div>
                        <div className={styles.smallsquare}></div>
                        <div className={styles.smallvector}></div>
                    </div>
                </div>
                <div className={styles.courseitem}>
                <FaPlayCircle />
                <div>
                    <h3>Function of Money</h3>
                    <p>Money as a Medium of Exchange and Store of Value, Salability of Money, Hard Money</p>
                    </div>
                    <div className={styles.smallobject}>
                        <div className={styles.smallcircle}></div>
                        <div className={styles.smallsquare}></div>
                        <div className={styles.smallvector}></div>
                    </div>
                </div>
                <div className={styles.courseitem}>
                <FaPlayCircle  style={{height:'25px' , width:'2px'}}/>
                <div>
                    <h3>Function of Money</h3>
                    <p>Money as a Medium of Exchange and Store of Value, Salability of Money, Hard Money</p>
                    </div>
                    <div className={styles.smallobject}>
                        <div className={styles.smallcircle}></div>
                        <div className={styles.smallsquare}></div>
                        <div className={styles.smallvector}></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default coursehome;