import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Career Path</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__timeline">
          <div className="experience__content">
            <div className="experience__timeline-item">
              <BsFillPatchCheckFill className="experience__timeline-icon" />
              <div>
                <h4 style={{marginTop:'-2.7%'}}>Trainee</h4>
                <small>Jan 2022 - June 2022</small>
                <p>Learned the fundamentals of software development, focusing on HTML, CSS, JavaScript, and basic backend with Node.js.</p>
              </div>
            </div>
            <div className="experience__timeline-item">
              <BsFillPatchCheckFill className="experience__timeline-icon" />
              <div>
                <h4 style={{marginTop:'-2.7%'}}> Associate Developer</h4>
                <small>July 2022 - Dec 2022</small>
                <p>Worked on small projects, handling both frontend and backend tasks, and deepened knowledge in React.js and MongoDB.</p>
              </div>
            </div>
            <div className="experience__timeline-item">
              <BsFillPatchCheckFill className="experience__timeline-icon" />
              <div>
                <h4 style={{marginTop:'-2.7%'}} >Software Engineer</h4>
                <small>Jan 2023 - Present</small>
                <p>Developed and maintained full-stack web applications, with a focus on performance optimization and scalability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
