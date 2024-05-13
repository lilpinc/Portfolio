import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css'

export default function Navigation({ handleChange, isChecked }) {


  return (
    <>
      <section id="navigation">
        <div>
          <img className="logo" src="/ABP.png" alt="logo" />
        </div>
        <ul className="nav-bar">
          <Link className="nav-item style" to="#about">about</Link>
          <Link className="nav-item style" to="#experience">work</Link>
          <Link className="nav-item style" to="#projects">projects</Link>
          <button className="resumebtn"><a className="resumebtn style" href="resume/Anna-Britta-Pincus.pdf" download>Resume</a></button>
          <label htmlFor="check" className="switch">
            <input type="checkbox" className="toggle" id="check" onChange={handleChange} checked={isChecked} />
            <span class="slider round"></span>
          </label>
        </ul>
      </section>
    </>
  );
}