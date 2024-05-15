import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';
import Pdf from '../Body/Resume/AnnaBrittaPincusResume.pdf';

export default function Navigation({ handleChange, isChecked }) {

  const visible = useRef([]);
  const logo = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('visible');
            }
        })
    });

    visible.current.forEach((el) => observer.observe(el));
}, [visible.current]);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('display');
              observer.unobserve(entry.target)
          } else {
              entry.target.classList.remove('display');
          }
      })
  });

  logo.current.forEach((el) => observer.observe(el));
}, [logo.current]);


  return (
    <>
      <section id="navigation">
        <div>
          <img ref={(el) => logo.current.push(el)} className="logo noshow" src="/ABP2.png" alt="logo" />
        </div>
        <ul ref={(el) => visible.current.push(el)} className="nav-bar hide">
          <Link className="nav-item style" to="#about">about</Link>
          <Link className="nav-item style" to="#experience">work</Link>
          <Link className="nav-item style" to="#projects">projects</Link>
          <button className="resumebtn nav-item"><a className="resumebtn style" href = {Pdf} target = "_blank">Resume</a></button>
          <label htmlFor="check" className="switch">
            <input type="checkbox" className="toggle" id="check" onChange={handleChange} checked={isChecked} />
            <span className="slider round"></span>
          </label>
        </ul>
      </section>
    </>
  );
}