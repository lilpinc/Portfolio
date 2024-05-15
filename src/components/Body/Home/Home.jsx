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
                    observer.unobserve(entry.target)
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
                <header ref={(el) => hiddenElementsRef.current.push(el)} className="home hidden" id="home">
                    <h1 id="itsame" className="summary">Hi, I'm Anna Britta!</h1>
                    <p className="size summary">I am a full stack web developer who enjoys creating aesthetic designs with efficient and easy to read code.</p>
                </header>
                <section id="about" ref={(el) => hiddenElementsRef.current.push(el)} className="article hidden">
                    <h1><b>About</b></h1>
                    <div className='summary summary2'>
                        <p className="school-info paragraphs">Throughout my youth and into the present, I have been drawn to activities that challenge ones creativity and mind. As such, over the years I have pursued professions that require the development of unique, functional, and goal oriented programs <span>(strength training regimens + exercise therapy programs).</span></p> 
                        <p className="school-info paragraphs">Recently, I have found that same challenge within full stack coding. I enjoy working both frontend and backend, seeing projects change and grow into smooth running apps. As a full stack developer it is my aim to continue improving upon my coding skills while working with a team to build efficiently constructed and visually pleasing products. I enjoy an encouraging environment that values collaboration and strong communication, and I would love to continue creating health focused designs.
                        </p>
                        <p className="school-info paragraphs">Outside of work you can find me rock climbing, painting, running, lifting, or sun bathing while reading a good book ☺︎.
                        </p>
                    </div>
                </section>
                <section id="skills" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden article">
                    <h1><b>Skills</b></h1>
                    <div className='stack summary summary2'>
                        <div className="school-info paragraphs"><b>Languages</b>
                            <div className="languages">
                                <li className="skills">SQL</li>
                                <li className="skills">mySQL</li>
                                <li className="skills">GraphQL</li>
                                <li className="skills">MongoDB</li>
                                <li className="skills">Javascript (ES6)</li>
                                <li className="skills">HTML</li>
                                <li className="skills">CSS</li>
                            </div>
                        </div>
                        <div className="school-info paragraphs"><b>Libraries & Frameworks</b>
                            <div className="languages">
                                <li className="skills">Node.js</li>
                                <li className="skills">Express.js</li>
                                <li className="skills">React.js</li>
                                <li className="skills">Bootstrap</li>
                            </div>
                        </div>
                        <div className="school-info paragraphs"><b>Tools</b>
                            <div className="languages">
                                <li className="skills">Git</li>
                                <li className="skills">Netlify</li>
                                <li className="skills">Heroku</li>
                                <li className="skills">Insomnia & Postman</li>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="experience" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden article">
                    <h1><b>Experience</b></h1>
                    <div className='summary summary2'>
                        <p className="school-info paragraphs"><b>Full Stack Web Developer</b></p>
                        <p className="school-info">University of Denver (2023)</p>
                        <p className="school-info paragraphs"><b>Online Personal Trainer</b></p>
                        <p className="school-info">Kickoff (2023-present)</p>
                        <p className="school-info paragraphs"><b>In Person Personal Trainer</b></p>
                        <p className="school-info">Anytime Fitness (2023-2024)</p>
                        <p className="school-info paragraphs"><b>Exercise Therapist & Personal Trainer</b></p>
                        <p className="school-info">Advanced Wellness Centre (2020-2023)</p>
                    </div>
                </section>
                <section id="projects" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden article">
                    <h1><b>Projects</b></h1>
                    <div className='summary summary2'>
                        <div className="school-info paragraphs projects">
                            <p className='proj'><b>OmniHealth Records</b> <i className="fa-solid fa-link"></i></p>
                            <p>React web app designed to help health services record and update facility and client information.</p>
                            <div className="languages">
                                <li className="skills">React</li>
                                <li className="skills">Express.js</li>
                                <li className="skills">Node.js</li>
                                <li className="skills">MongoDB</li>
                                <li className="skills">Heroku</li>
                                <li className="skills">GraphQL</li>
                                <li className="skills">CSS</li>
                            </div>
                        </div>
                        <div className="school-info paragraphs projects">
                            <p className='proj'><b>Project Hyperdrive</b> <i className="fa-solid fa-link"></i></p>
                            <p>Interactive space travel website designed as an educational tool to learn more about exoplanets outside of our solar system.</p>
                            <div className="languages">
                                <li className="skills">Javascript (ES6)</li>
                                <li className="skills">Express.js</li>
                                <li className="skills">mySQL</li>
                                <li className="skills">Boostrap</li>
                                <li className="skills">Tailwind</li>
                                <li className="skills">Handlebars</li>
                                <li className="skills">CSS</li>
                                <li className="skills">API</li>
                            </div>
                        </div>
                        <div className="school-info paragraphs projects">
                            <p className='proj'><b>ABP Fitness</b> <i className="fa-solid fa-link"></i></p>
                            <p>Fitness website designed to promote a personal training business via pre-programmed workouts and online training.</p>
                            <div className="languages">
                                <li className="skills">React</li>
                                <li className="skills">Express.js</li>
                                <li className="skills">Node.js</li>
                                <li className="skills">CSS</li>
                                <li className="skills">Netlify</li>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="education" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden article">
                    <h1><b>Education</b></h1>
                    <div className='summary summary2'>
                        <p className="school-name ">University of Denver (2023) </p>
                        <p className="school-info">Full Stack Coding Boot Camp</p>
                        <p className="school-name">Old Dominion University (2018-2019)</p>
                        <p className="school-info">M.S. Exercise Science</p>
                        <p className="school-name">Virginia Polytechnic Institute and State University (2013-2017)</p>
                        <p className="school-info">B.S. Biological Sciences</p>
                    </div>
                </section>
            </main>
        </>
    );
}