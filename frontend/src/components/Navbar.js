import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">Home</Link>
                <span>|</span>
                <Link to="/records">Planets</Link>
                <span>|</span>
                <Link to="/patients">Patients</Link>
            </div>
        </header>
    )
}

export default Navbar;