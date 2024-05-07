import './Home.css'
import { useEffect, useRef } from 'react';

export default function Home() {

    const hiddenElementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries)
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        });

     hiddenElementsRef.current.forEach((el) => observer.observe(el));
    }, [hiddenElementsRef.current]);
            



    return (
        <>
            <main>
                <header className="home" id="home">
                    <h1 className="summary">Hi, I'm Anna Britta!</h1>
                    <p className="size summary">I am a full stack web developer who enjoys creating aesthetic designs with efficient and easy to read code.</p>
                </header>
                <section id="about" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
                    <h1><b>About</b></h1>
                    <p className="school-info paragraphs">I want to talk all about me!</p>
                </section>
                <section id="skills" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
                    <h1><b>Skills</b></h1>
                    <ul className="school-info paragraphs"><b>Languages</b>
                        <div className="languages">
                            <li className="skills">SQL</li>
                            <li className="skills">mySQL</li>
                            <li className="skills">GraphQL</li>
                            <li className="skills">MongoDB</li>
                            <li className="skills">Jaascript (ES6)</li>
                            <li className="skills">HTML</li>
                            <li className="skills">CSS</li>
                        </div>
                    </ul>
                    <ul className="school-info paragraphs"><b>Libraries & Frameworks</b>
                        <div className="languages">
                            <li className="skills">Node.js</li>
                            <li className="skills">Express.js</li>
                            <li className="skills">React.js</li>
                            <li className="skills">Bootstrap</li>
                        </div>
                    </ul>
                    <ul className="school-info paragraphs"><b>Tools</b>
                        <div className="languages">
                            <li className="skills">Git</li>
                            <li className="skills">Netlify</li>
                            <li className="skills">Heroku</li>
                            <li className="skills">Insomnia & Postman</li>
                        </div>
                    </ul>
                </section>
                <section id="experience" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
                    <h1><b>Experience</b></h1>
                    <p className="school-info paragraphs"><b>Student</b></p>
                    <p className="school-info paragraphs"><b>Kickoff</b></p>
                    <p className="school-info paragraphs"><b>Exercise Therapist & Personal Trainer</b></p>
                </section>
                <section id="projects" className="hidden">
                    <h1><b>Projects</b></h1>
                    <p className="school-info paragraphs projects"><b>OmniHealth Records</b></p>
                    <p className="school-info paragraphs projects"><b>Project Hyperdrive</b></p>
                    <p className="school-info paragraphs projects"><b>ABP Fitness</b></p>
                </section>
                <section id="education" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden hidden3">
                    <h1><b>Education</b></h1>
                    <ul className='summary'>
                        <p className="school-name ">University of Denver (2023) </p>
                        <p className="school-info">Full Stack Coding Boot Camp</p>
                        <p className="school-name">Old Dominion University (2018-2019)</p>
                        <p className="school-info">M.S. Exercise Science</p>
                        <p className="school-name">Virginia Polytechnic Institute and State University (2013-2017)</p>
                        <p className="school-info">B.S. Biological Sciences</p>
                    </ul>
                </section>
            </main>
        </>
    );
}