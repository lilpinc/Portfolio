import './Home.css'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import video from "/video.mp4";


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
                <img id="mypic" src="/me.jpg" alt="me" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden" />
                <section id="about" ref={(el) => hiddenElementsRef.current.push(el)} className="article hidden">
                    <h2><b>About</b></h2>
                    <div className='summary summary2'>
                        <p className="school-info paragraphs">Throughout my youth and into the present, I have been drawn to activities that challenge ones creativity and mind. As such, over the years I have pursued professions that require the development of unique, functional, and goal oriented programs<span id="pre-program">(strength training regimens + exercise therapy programs).</span></p>
                        <p className="school-info paragraphs">Recently, I have found that same challenge within tech. I enjoy full stack coding and UI/UX design, seeing projects change and grow into smooth running apps. As a developer it is my aim to continue improving upon my coding and UI/UX design skills with a team to build efficiently constructed and visually pleasing products. I enjoy an encouraging environment that values collaboration and strong communication, and I would love to continue creating health focused designs.
                        </p>
                        <p className="school-info paragraphs">Outside of work you can find me rock climbing, painting, running, lifting, or sun bathing while reading a good book <span id="smiley">☺︎</span>.
                        </p>
                    </div>
                </section>
                <section id="skills" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden article">
                    <h2><b>Skills</b></h2>
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
                    <h2><b>Experience</b></h2>
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
                    <h2><b>Projects</b></h2>
                    <div className='summary summary2'>
                    <div className="school-info paragraphs projects">
                            <div className='proj'><b>Listings</b>
                            <div>
                           <a href={video} target = "_blank"> <i className="fa fa-file-image-o fa-link color" aria-hidden="true"></i></a>
                                <Link to="https://github.com/JosDaw/Listings" target="_blank" className="color images">
                                    <i className="fa-solid fa-link"></i>
                                </Link>
                                </div>
                            </div>
                            <p>Home search app designed to improve user experience and prioritize mindful design & features important for communities of marginalized identities.</p>
                            <div className="languages">
                                <li className="skills">React native</li>
                                <li className="skills">Typescript</li>
                                <li className="skills">Firebase</li>
                                <li className="skills">Expo.io</li>
                            </div>
                            <div className="award"><i className="fa fa-star" aria-hidden="true"></i>Won "Best Accessibility Solution" and "Best DEI Hack" at Technica 2024 Hackathon</div>
                        </div>
                        <div className="school-info paragraphs projects">
                            <p className='proj'><b>OmniHealth Records</b>
                                <Link to="https://github.com/shockeyj9/Omnihealth-Records" target="_blank" className="color">
                                    <i className="fa-solid fa-link"></i>
                                </Link>
                            </p>
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
                            <p className='proj'><b>Project Hyperdrive</b>
                                <Link to="https://github.com/kalaniJ94/Project_Hyperdrive" target="_blank" className="color">
                                    <i className="fa-solid fa-link"></i>
                                </Link>
                            </p>
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
                            <p className='proj'><b>ABP Fitness</b>
                                <Link to="https://github.com/lilpinc/Personal-Training-Website" target="_blank" className="color">
                                    <i className="fa-solid fa-link"></i>
                                </Link>
                            </p>
                            <p>Fitness website designed to promote a personal training business via pre-programmed workouts and online training.</p>
                            <div className="languages">
                                <li className="skills">React</li>
                                <li className="skills">Express.js</li>
                                <li className="skills">Node.js</li>
                                <li className="skills">CSS</li>
                                <li className="skills">Netlify</li>
                            </div>
                        </div>
                        <div className="school-info paragraphs projects">
                            <p className='proj'><b>Daily Sends</b>
                                <Link to="https://github.com/lilpinc/Rock-Climbing-Log" target="_blank" className="color">
                                    <i className="fa-solid fa-link"></i>
                                </Link>
                            </p>
                            <p>React web app designed as a space for climbers to record their outdoor ascents and daily training sessions.</p>
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
                    <h2><b>Education</b></h2>
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