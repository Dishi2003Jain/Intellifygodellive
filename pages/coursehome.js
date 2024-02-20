import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import CircularProgressBar from '@/components/CircularProgress';
import { FaPlayCircle } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const coursehome = () => {
    const completionPercentage = 60;
    const [modules, setModules] = useState([]);

    useEffect(() => {
        async function fetchModules() {          
          const res = await fetch('/api/module');
          const data = await res.json();
          setModules(data);
        }
    
        fetchModules();
      }); 

  return (
    <div className={styles.uicontainer}>
        <div className={styles.coursehomepage}>
       <div>
        <h1 style={{color:'#2A721E'}}>Mastering Personal Finance</h1>
        </div>
        <div className={styles.progress}>
            <div className={styles.progressdetails}>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallcircle}>
                    <Image src='/briefcircle.jpeg' height={20} width={20} alt='circle'/>
                </div>
                8 more to collect
            </div>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallsquare}>
                <Image src='/briefsquare.jpeg' height={20} width={20} alt='square'/>
                </div>
                8 more to collect
            </div>
            <div className={styles.individualprogressdetails}>
                <div className={styles.smallvector}>
                <Image src='/brieftool.jpeg' height={20} width={20} alt='tool'/>
                </div>
                2 more to collect
            </div>
            </div>
            <CircularProgressBar percentage={completionPercentage}/>
        </div>
        <div className={styles.secondcoursehome}>
        {modules.map((module, index) => (
        <div key={index} className={styles.courseitem}>
           <Link href='/modulebrief'>
          <p>{module.module_name}</p>
          </Link> 
        </div>
      ))}
            </div>
            </div>
            </div>
  )
}

export default coursehome;