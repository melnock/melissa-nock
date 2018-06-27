import React, { Component } from 'react'
import ProjectShow from '../components/ProjectShow'

const data=[
  {name: "Stable Mate",
    image: "https://i.imgur.com/AWU8AH7.png",
    techDescription: "React/Redux/Rails API project",
    links:{
      githubFront: "https://github.com/melnock/barn-management-frontend",
      githubBack: "https://github.com/melnock/barn-management-api",
      liveSite: "" ,
      demo: "https://youtu.be/LR8W5VMKaxQ"
    },
    userDescription: "Enables barn and horse owners to keep track of horses, grain, and overall care.",
    bulletPoints: ["Built a Rails backend API using PostGres and a React/Redux frontend with custom CSS styling.", "Created authentication using JWT with bcrypt for security and added functionality.", "Implemented an outside API to show local weather and Chart.js to track changes in horse behavior over time."]},
  {name: "Hoppington Village",
    image: "https://i.imgur.com/sv2rOVQ.png",
    techDescription: "React/Rails API project",
    links:{
      githubFront: "https://github.com/melnock/mod-4-final-project-hoppington-village",
      githubBack: "",
      liveSite: "https://nameless-shelf-60784.herokuapp.com/" ,
      demo: "https://youtu.be/NOLy9hjBR6U"
    },
    userDescription: "Create and interact with a pet rabbit who needs to be fed, cleaned and rested.",
    bulletPoints: ["Built a Rails backend with a React frontend with authentication.", "Created authentication using JWT with bcrypt for security and added functionality.", "Implemented html drag and drop features and custom CSS styling."]},
  {name: "Dino-Griffi-Corn Racer",
    image: "https://i.imgur.com/jrThq65.png",
    techDescription: "Javascript/Rails project",
    links:{
      githubFront: "https://github.com/melnock/dino-griffi-corn-api",
      githubBack: "",
      liveSite: "" ,
      demo: "https://youtu.be/xyqRFOPIAIw"
    },
    userDescription: "Play as one of many characters to avoid an ever increasing amount of obstacles.",
    bulletPoints: ["Built a Rails backend with a Javascript frontend.", "Add your name to the leaderboard to see how your score compares and maybe find the special konami code mini-game!", "Single Page Application"]},
  {name: "Apples To Humanity",
    image: "https://i.imgur.com/2slS1vS.png",
    techDescription: "Ruby on Rails Project",
    links:{
      githubFront: "https://github.com/melnock/apples-to-humanity",
      githubBack: "",
      liveSite: "" ,
      demo: "https://youtu.be/eNj0o_qLcUQ"
    },
    userDescription: "A multiplayer, online version of the popular card game.",
    bulletPoints: ["Using the MVC model, built a complete web application in Rails.", "Incorpataed Semantic UI and custom CSS to style."]}
]


class ProjectList extends Component{
  state={
    showExtraInfo: null,
  }

  handleCardClick= (e)=>{
    if (this.state.showExtraInfo !== e.target.id) {
      this.setState({
        showExtraInfo: e.target.id,
      })
    }else{
      this.setState({
        showExtraInfo: null,
      })
    }
  }

  render(){
    console.log(this.state)
    const projects = data.map((p, ind)=>( <ProjectShow key={ind} project={p} handleCardClick={this.handleCardClick} selectedProject={this.state.showExtraInfo}/>))
    return (
      <div className="project-list">
        <h1>TECHNICAL PROJECTS</h1>

        {projects}
      </div>
    )
  }
}

export default ProjectList
