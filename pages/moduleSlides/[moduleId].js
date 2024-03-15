import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css"; // Adjust with your actual CSS module path
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js's Image component
import Heading from '@/components/Heading'

const ModuleSlides = () => {
    const router = useRouter();
    const { moduleId } = router.query;
    const [slides, setSlides] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const isLastSlide = currentSlideIndex === slides.length - 1;


    useEffect(() => {
        if (!moduleId) return;
        const fetchSlides = async () => {
            try{
            const response = await fetch(`/api/slide?moduleId=${moduleId}`);
            const data = await response.json();
            setSlides(data);
            }
            catch (error) {
                console.error("Failed to fetch slides", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSlides();
    }, [moduleId]);
     
    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    if (!isLoading && slides.length === 0) {
        return <div className={styles.noSlides}>No slides to show</div>;
    }

    const goToPreviousSlide = () => {
        if (currentSlideIndex === 0) {
            router.push('/coursehome');
        } else {
            setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    const goToNextSlide = () => {
        if (isLastSlide) {
            router.push('/coursehome');
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const renderSlideContent = (slide) => {
        switch (slide.slide_type) {
            case 'Topic Introduction Slide':
                return (
                    <div className={styles.uicontainer}>
                    <div className={styles.topicintrocontainer}>
                    <Heading/>
                    <div className={styles.topicintroheading}>
                    <Image src='/shapes1.png' width={100} height={100}/>
                    <h2>{slide.slide_name}</h2>
                    <p>{slide.slide_body}</p>
                    </div>
                   <div>
                   <h4>Why learn this?</h4>
                   <p>{slide.why_learn}</p>
                  </div>
                    </div>
                    </div>
                );
            case 'Content Slide':
                return (
                    <div className={styles.uicontainer}>
                    <div className={styles.contentslidecontainer}>
            <Heading/>
             <h2>{slide.slide_name}</h2>
             <div className={styles.contentsld}>
             <Image src='/contentimage.png' width={125} height={125}/>
                <p>{slide.slide_body}</p>
             </div>
        </div>
        </div>
                );
            case 'Quiz Slide':
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
                );
            case 'Progress Slide':
                return (
                    <div className={styles.uicontainer}>
                    <div className={styles.progressslidecontainer}>
           <Heading/>
           <div className={styles.progressstatus}>
            <Image src='/progresscircle.png' width={100} height={100}/>
            <p>Congratulations! You earned a {slide.bodyType}</p>
           </div>
           <div className={styles.progressshape}>
            <Image src='/progresscircle.png' width={50} height={50}/>
            <Image src='/progresssquare.png' width={50} height={50}/>
            <Image src='/progresstool.png' width={50} height={50}/>
           </div>
        </div>
        </div>
                );
                case 'Concept Slide':
                    return (
                        <div className={styles.uicontainer}>
                            <div className={styles.conceptlistcontainer}>
                                <Heading/>
                                <div className={styles.conceptlistcontent}>
                                    <h2>Concepts in this module</h2>
                                    {slide.concepts.map((concept) => (
                                        <div key={concept} className={styles.conceptlist}>
                                            <Image src='/briefcircle.jpeg' alt='Concept' width={15} height={15}/>
                                            <p>{concept}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );                
            default:
                return <div>Unknown slide type</div>;
        }
    };

    const currentSlide = slides[currentSlideIndex];

    return (
        <div>
            {currentSlide ? renderSlideContent(currentSlide) : <p>Loading slides...</p>}
            <div className={styles.leftrightbuttons} style={{ marginTop: '1rem' }}>
                <button className={styles.leftbutton} onClick={goToPreviousSlide}> <FaArrowLeft /> </button>
                <button className={styles.rightbutton} onClick={goToNextSlide}>
                {isLastSlide ? 'End of Slides' : `${slides[currentSlideIndex + 1].slide_name} `} <FaArrowRight />
               </button>
            </div>
        </div>
    );
};

export default ModuleSlides;
