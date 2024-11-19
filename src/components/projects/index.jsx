'use client';
import styles from './style.module.scss';
import Project from '../project';
import Image from "next/image";

export default function index() {

    const projectData1 = {
        title: '01 / GRADIENT ACADEMY',
        description: 'Contributed to frontend development using NextJS with TypeScript, implementing designs and resolving bugs to enhance the user interface and experience of Gradient\'s web product. Engineered backend solutions using Django, including the development of a new feature with comprehensive technical documentation.',
        techStack: 'Tech Stack: NextJS, TypeScript, Django, Python, Git',
        imageSrc: '/images/portfolio7.jpg',
    };

    const projectData2 = {
        title: '02 / UQUIZZLE',
        description: 'Secured 1st place at UQCS Hackathon 2024, competing against 35 other teams. Developed an extension for UQ lecture recordings as the Frontend Engineer and UI Designer, utilizing ReactJS and Craco to enhance the learning experience.',
        techStack: 'Tech Stack: ReactJS, Craco, JavaScript, HTML, CSS, Git',
        imageSrc: '/images/portfolio6.jpg',
    };

    const projectData3 = {
        title: '03 / MONEYFITT SG',
        description: 'My first internship experience, I built new features for MoneyFitt\'s mobile app using Ionic and Angular to improve user experience, and optimized the app\'s backend with Spring Boot for better mobile service support.',
        techStack: 'Tech Stack: Angular, Ionic, Spring Boot, Java, Typescript, HTML, CSS, Git',
        imageSrc: '/images/portfolio5.jpg',
    };

    const projectData4 = {
        title: '04 / PEOPL.',
        description: 'My team won 1st place in the Youth Empowerment Track at Garuda Hacks 4.0 by creating an innovative youth-centered community discussion app. Focusing on delivering a seamless and visually appealing user experience.',
        techStack: 'Tech Stack: Typescript, ReactJS, HTML, CSS, Git',
        imageSrc: '/images/portfolio1.jpg',
    };

    const projectData5 = {
        title: '05 / OKK UI 2022',
        description: 'As a Web Developer at OKK UI, I developed an intuitive UI using Tailwind CSS and ReactJS, enhancing the website\'s aesthetic appeal and user experience. I also created wireframes to facilitate collaboration and align with project goals.',
        techStack: 'Tech Stack: Tailwind CSS, ReactJS, Git',
        imageSrc: '/images/portfolio2.jpg',
    };

    const projectData6 = {
        title: '06 / ACB-ISBE REVAMPED',
        description: 'As part of my college project, I worked with a team to revamp the website and create a mobile app for the ACB-ISBE website. We used Tailwind, JavaScript, Django, and Python to create a visually appealing, responsive, and user-friendly website.',
        techStack: 'Tech Stack: Tailwind CSS, JavaScript, AJAX, Django, Python, Git',
        imageSrc: '/images/portfolio3.jpg',
    };

    const projectData7 = {
        title: '07 / STUDENTXCEO INTERNATIONAL SUMMIT 2022',
        description: 'I contributed to the design of the StudentXCEO International Summit 2022 website. I made the designs look better and easier to use by creating wireframes and prototypes. I worked with the developers to make sure the designs were implemented correctly. My work helped make the website and app more user-friendly for everyone.',
        techStack: 'Tech Stack: Figma, Whimsical',
        imageSrc: '/images/portfolio4.jpg',
    };

    return (
        <div className={styles.projects}>
            <div className={styles.header}>
                <Image
                    width={36}
                    height={36}
                    src={'/images/arrowdown.svg'}
                    alt={"arrow"}
                    className={styles.arrowIcon}
                />
                MY PROJECTS.
            </div>
            <Project {...projectData1}/>
            <Project {...projectData2}/>
            <Project {...projectData3}/>
            <Project {...projectData4}/>
            <Project {...projectData5}/>
            <Project {...projectData6}/>
            <Project {...projectData7}/>
        </div>
    )
}