import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css'

export default function Navigation() {
  
  return (
    <>
      <section id="navigation">
        <div>
          <img className="logo" src="/ABP.png" alt="logo" />
        </div>
        <ul className="nav-bar">
          <Link className="nav-item style" to="#about">about</Link>
          <Link className="nav-item style" to="#work">work</Link>
          <Link className="nav-item style" to="#projects">projects</Link>
          <button className="resumebtn"><a className="resumebtn style" href="resume/Anna-Britta-Pincus.pdf" download>Resume</a></button>
        </ul>
      </section>
    </>
  );
}