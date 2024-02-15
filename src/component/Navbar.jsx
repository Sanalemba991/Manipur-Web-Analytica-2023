
import logo from "./Images/reject1.png"
import { Link } from 'react-router-dom'
import May from "./MaytoSep"

function Navbar() {
  return (
    <div className='navbar' >
      <div className='container'>
        <div className='logo'>
          <img src={logo}/>
        </div>
          <div className='links'>
            <Link className="link" to="/?cat=art"><h6>Home</h6></Link>
            <Link className="link" to="/may"><h6>May to June</h6></Link>
            <Link className="link" to="/oct"><h6>Oct </h6></Link>
            <Link className="link" to="/relief"><h6>Relief Camp</h6></Link>
            <Link className="link" to="/org"><h6>Organization</h6></Link>
            <Link className="link" to="/dead"><h6>Deceased People</h6></Link>
            

            <span>JOshep</span>
          <span>Logout</span>
          <span className="write">
            <Link className='link' to="/writes">Write</Link>
          </span>
          </div>

        
      </div>
     
    </div>
  )
}

export default Navbar
