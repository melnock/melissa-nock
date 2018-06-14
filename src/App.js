import React, { Component } from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './containers/HomePage'
import ProjectList from './containers/ProjectList'
import ProjectShow from './components/ProjectShow'
import AboutPage from './containers/AboutPage'
import Resume from './components/Resume'


class App extends Component {
  state={
    home: true,
  }

  componentDidMount(){
    this.props.history.push('/melissa-nock')
  }

  handleHeaderClick=()=>{
    this.props.history.push('/melissa-nock')
    window.location.reload();
  }

  handleEnterClick=(e)=>{
    console.log("Got me!")

    if (this.state.home){
      document.getElementById("home-logo").classList = "move"
      document.getElementById("welcome").classList = "move"
      console.log(e.target.classList)
      setTimeout(()=>{
        this.setState({
          home: false
        })

        this.props.history.push('/about')
      }, 2000)
    }else{
      this.setState({
        home: true
      })
      this.props.history.push('/melissa-nock')
    }


  }

  render() {
    return (
      <div className="App">
        {this.state.home ? null : <header className="App-header" >
          <h1 className="App-title" onClick={this.handleHeaderClick}>Melissa Nock</h1>
          <h3 onClick={this.handleHeaderClick}> Fullstack Web Developer </h3>
          <NavBar/>
        </header>}
        <div className="routes">
          <Route exact path="/melissa-nock" render={()=><HomePage handleEnterClick={this.handleEnterClick} home={this.state.home}/>}/>
          <Route exact path="/projects" component={ProjectList}/>
          <Route path="/projects/:slug" component={ProjectShow}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/about/resume" component={Resume}/>
        </div>
        <footer>
          Melissa Nock 2018 | <a href="https://www.linkedin.com/in/melissa-nock">LinkedIn</a> | <a href="https://www.github.com/melnock">GitHub</a> | <a href="https://medium.com/@melnock">Medium</a>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
