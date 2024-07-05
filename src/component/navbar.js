import Link from "next/link";

export default function Navbar(){

    return (
      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">JESUS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link className="nav-link mx-2 active" href="/" passHref>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" href="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" href="/contact">contact</Link>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal"> sign in</button>                          
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal"> sign up</button>                          
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    );
  }