import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import CircularProgressBar from '@/components/CircularProgress';
import { FaPlayCircle } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import Conceptlist from './conceptlist';
const coursehome = () => {
    const completionPercentage = 60;
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        async function fetchModules() {
            try {
                const res = await fetch('/api/module');
                const data = await res.json();
                setModules(data);
            } catch (error) {
                console.error("Failed to fetch modules", error);
            } finally {
                setIsLoading(false); // Set loading to false once the data is fetched
            }
        }

        fetchModules();
    },[]);

    const handleNextSlide = () => {
      const currentModule = modules[currentSlideIndex];
      const currentSlideType = currentModule.slides[currentSlideIndex].slide_type;
      const nextSlideIndex = currentModule.slides.findIndex((slide, index) => 
          index > currentSlideIndex && slide.slide_type === currentSlideType
      );
      if (nextSlideIndex !== -1) {
          setCurrentSlideIndex(nextSlideIndex);
      }
  };

  const handlePreviousSlide = () => {
      const currentModule = modules[currentSlideIndex];
      const currentSlideType = currentModule.slides[currentSlideIndex].slide_type;
      const previousSlideIndex = currentModule.slides.slice(0, currentSlideIndex).reverse().findIndex(slide => slide.slide_type === currentSlideType);
      if (previousSlideIndex !== -1) {
          setCurrentSlideIndex(currentSlideIndex - previousSlideIndex - 1);
      }
  };

    if (isLoading) {
      return <div className={styles.loader}></div>;
    }

    const currentModule = modules[currentSlideIndex];
    const currentSlide = currentModule.slides[currentSlideIndex];
  
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
        {modules && Array.isArray(modules) && modules.map((module, index) => (
    <div key={index} className={styles.courseitem}>
      <FaPlayCircle/>
      <MdDoneOutline/>
      <div className={styles.moduleheading}>
      {index === 0 ? (
          <Link href="/modulebrief" style={{textDecoration:'none', color:'black' }}>
              <h3>{module.module_name}</h3>
          </Link>
        ) : (
          <h3>{module.module_name}</h3>
        )}
       {module.slides.map(slide => (
                  <div key={slide._id}>
                   {currentSlide.slide_type === 'Content Slide' && (
                        <Conceptlist
                            key={currentSlideIndex}
                            slide={currentSlide}
                            handleNextSlide={handleNextSlide}
                            handlePreviousSlide={handlePreviousSlide}
                        />
                    )}
                  </div>
            ))}
        <div>
          <Image src='/shape1circle.png' alt='circle' width={25} height={25}/>
          <Image src='/shape1square.png' alt='square' width={25} height={25}/>
          <Image src='/shape1tool.png' alt='tool' width={25} height={25}/>
        </div>
        </div>
        <p>{module.details}</p>
    </div>
  ))}
            </div>
            </div>
            </div>
  )
}

export default coursehome;