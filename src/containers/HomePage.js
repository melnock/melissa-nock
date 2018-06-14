import React, { Component } from 'react'
// import ProjectShow from '../components/ProjectShow'



class HomePage extends Component{

  handleAccordion = (e)=>{

  }

  render(){
    return (
      <div className="homescreen" onClick={this.props.handleEnterClick}>
        <img id="home-logo" src="https://i.imgur.com/O8Qg6SK.png" alt="welcome logo"/>
        <h1 id="welcome">WELCOME</h1>

      </div>
    )
  }
}

export default HomePage
