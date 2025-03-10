import React from 'react'
import { Link } from 'react-router-dom'
// import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Expense">ExpenseTracker</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pnf">Pnf</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Conditional">ConditionalRendaring</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/effect">useEffect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/recipe">recipe</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/view">ViewRecipe</Link>
        </li> */}
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
