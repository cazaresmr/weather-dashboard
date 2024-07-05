import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <h2>Weather App</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
