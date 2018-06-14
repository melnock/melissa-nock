import React from 'react'
import { Link} from 'react-router-dom'


class NavBar extends React.Component {
  render(){

    return(
      <div className="navbar">
      {//<Link to="/home"> Home </Link>
      }
      <Link to="/projects"> Projects </Link>
      <Link to="/about"> About </Link>
      </div>
    )

  }


}

export default NavBar
