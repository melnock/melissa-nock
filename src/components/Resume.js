import React from 'react'

const Resume = (props)=>{
  return (
    <div className="resume">
      <div className="technical">
        <h3>TECHNICAL EXPERIENCE</h3>
          <h5> LANGUAGES </h5>
            <ul>
              <li> Ruby </li>
              <li> Javascript </li>
              <li> React </li>
              <li> Redux </li>
              <li> Ruby on Rails </li>
              <li> HTML </li>
              <li> CSS </li>
            </ul>
      </div>
      <h3>WORK EXPERIENCE</h3>
      <div className="experience">
      <h5>Five Stars Farm</h5>
        <h6>Exeter, NH — Working Student</h6>
        <p>July 2016 - December 2017</p>
        <p>Worked in a small team to keep an organized, safe environment for horses and people.</p>
      </div>
      <div className="experience">
      <h5>North Shore Orthodontics</h5>
        <h6>Newburyport, MA— Safety Officer</h6>
        <p>September 2017 - December 2017</p>
        <p>Built an updated MSDS database using FileMaker Pro for two Orthodontic Offices.</p>
      </div>
      <div className="experience">
      <h5>Green Chimneys</h5>
          <h6>Brewster, NY — Horse Barn Intern</h6>
          <p>January 2016 - July 2016</p>
          <p>Facilitated 1 on 1 experiences with students to ensure safe horse care and barn management.</p>
      </div>
      <div className="experience">
      <h5>Cascade Group</h5>
          <h6>Blacksburg, VA — Receptionist</h6>
          <p>March 2015 - December 2015</p>
          <p>Fostered a welcoming, efficient environment for patients. Maintained the website for the business.</p>
      </div>
      <div className="experience">
      <h5>Peace Corps, Cameroon</h5>
          <h6>Batie, Ouest, Cameroun — Youth Development Volunteer</h6>
          <p>May 2014 - February 2015</p>
          <p>Engaged with community members to develop programs focused on the youth of the community.</p>
      </div>
    </div>
  )
}

export default Resume
