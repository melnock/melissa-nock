import React from 'react'

const ProjectShow = (props)=>{
  const bulletPoints = props.project.bulletPoints.map((b, ind)=>(<li key={ind}>{b}</li>))
  return (
    <div className="project-show">
      <h4 onClick={props.handleCardClick} id={props.project.name}>{props.project.name}—</h4>
        <span>{props.project.techDescription} </span>
        {props.selectedProject === props.project.name ? <div><a href={props.project.links.githubFront}> Github | </a>
          {props.project.links.githubBack ? <a href={props.project.links.githubBack}> API Github | </a> : null}
          {props.project.links.liveSite ? <a href={props.project.links.liveSite}> Live Site | </a> : null}
           <a href={props.project.links.demo}> Demo</a>
          <p>{props.project.userDescription}</p>
          <ul>
            {bulletPoints}
          </ul>
          <img className="project-logo" src={props.project.image} alt="project logo"/>
          </div> : null
        }
    </div>
  )
}

export default ProjectShow
