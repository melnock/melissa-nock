import React, { Component } from 'react';
// import ProjectList from '../containers/ProjectList'
// import Resume from '../components/Resume'


class AboutPage extends Component {

  state = {
    hideResume: true
  }

  // componentDidMount(){
  //   document.getElementById("about-page").classList = "loaded"
  //   console.log(document.getElementById("about-page").classList)
  // }

  handleClick=(e)=>{
    if (this.state.hideResume) {
      this.props.history.push('/about/resume')
    }else{
      this.props.history.push('/about')
    }

    this.setState({
      hideResume:!this.state.hideResume
    })

  }
  render() {
    console.log("?", this.state)
    return (
      <div id="about-page">
        {this.state.hideResume ?
          <div className="about-p">
            <button onClick={this.handleClick}>Go To Resume</button>
            <p className="about-me">Full stack web developer with a love
            for design, problem-solving and positively
            impacting the world. Combining experience
            in Ruby on Rails, JavaScript, and React/Redux
            with a background in Interior Design, customer
            service, and animal care, I strive to find
            adaptable solutions and share knowledge, with
            a goal of improving the world around me.</p>
            <br/>
            <p className="about-me">Each experience develops us into the person
            we are meant to be. I have always felt it very
            important to take the time to explore my passions,
            be it through learning a new programming language,
            a full-time work or volunteer experience, or traveling
            the world. My experiences have led me to grow and become
            who I am.</p>
          </div>
          :
          <button onClick={this.handleClick}> Back </button>}

      </div>
    );
  }
}

export default AboutPage;
