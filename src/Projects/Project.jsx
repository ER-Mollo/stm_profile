import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./Project.scss";
import { Zoom } from 'react-slideshow-image';

import image1 from '../assets/image2.png'
import image2 from '../assets/image3.png'
import image3 from '../assets/image4.png'
import './Project.scss'

import Contact from '../Contact/Contact';
function Projects() {
   const images = [
     image1,image2,image3
  ];
   return (
      <div className='project'>
        
        {/* <Contact/> */}
        <div className="heading">
            <h2>Recent Projects</h2>
            <h1>Look At The Projects I Worked on</h1>
         </div>
         <div className='slide'>
         <Zoom className="slide">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`, 'height':'100vh' }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`, 'height':'100vh'  }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})`, 'height':'100vh'  }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Zoom>

         </div>
        
         

         <div className="project-content">
            <div style={{ 'backgroundImage': `url(${images[0]})`,'height':'100vh' }} className="select">
                   <span>Slide 1</span>
             </div>
             <div style={{ 'backgroundImage': `url(${images[1]})` }} className="select">
                   <span>Slide 2</span>
             </div>
             <div style={{ 'backgroundImage': `url(${images[2]})` }} className="select">
                   <span>Slide 3</span>
             </div>   
         </div>

         
      </div>
   )
}

export default Projects
