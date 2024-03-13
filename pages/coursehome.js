import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import CircularProgressBar from '@/components/CircularProgress';
import { FaPlayCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { useRouter } from 'next/router';
import Image from 'next/image';
const CourseHome = () => {
    const router = useRouter();
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const res = await fetch('/api/module'); // Adjust API endpoint as needed
                const data = await res.json();
                setModules(data);
            } catch (error) {
                console.error("Failed to fetch modules", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchModules();
    }, []);

    const selectModule = (index) => {
        const moduleId = modules[index]._id;
        router.push(`/moduleSlides/${moduleId}`);
    };

    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    return (
            <div className={styles.uicontainer}>
                <div className={styles.coursehomepage}>
                <div className={styles.coursehomeheading}>
                    <h1>Mastering Personal Finance</h1>
                </div>
               {modules.map((module, index) => (
                <div key={module._id} onClick={() => selectModule(index)} className={styles.module}>
                    <div>
                    <div className={styles.coursehomesubheading}>
                    <div style={{width:'70%'}}>
                    <h3>{module.module_name}</h3>
                    <div style={{fontSize:'0.9rem'}}>{module.details}</div>
                    </div>
                    <div>
                      <Image src='/shape1circle.png' width={25} height={25}/>
                      <Image src='/shape1square.png' width={25} height={25}/>
                      <Image src='/shape1tool.png' width={25} height={25}/>
                     </div>
                    </div>
                    </div>
                </div>
            ))}
             </div>
            </div>
    );
};

export default CourseHome;
