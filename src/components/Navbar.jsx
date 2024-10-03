import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/db'
import '../assets/styles/components/Navbar.css'
import { StartUpContext } from '../service/StartUpContext'
const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(StartUpContext);
  
    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/login')
    }

    return (
        <div className='navbar d-flex align-items-center justify-content-between'>
            <Link to='/'>
                <img src={assets.logo} alt="this is logo website" className='logo-web' width={50} />
            </Link>

            <div className="navbar-item">
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to='/our-start-up' className={({ isActive }) => isActive ? 'active' : ''}>Our Startup</NavLink>
                <NavLink to='/investor' className={({ isActive }) => isActive ? 'active' : ''}>Investor</NavLink>
                <NavLink to='/service' className={({ isActive }) => isActive ? 'active' : ''}>Service</NavLink>
                <NavLink to='/events-news' className={({ isActive }) => isActive ? 'active' : ''}>Events & News</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            </div>
            <div className='wrapper-i d-flex align-items-center justify-content-center gap-5'>
                <Link to='/events-news'>
                    <i className="fa-solid fa-bell text-primary bell"></i>
                </Link>

                {currentUser ? (
                    <div className='user-info dropdown d-flex align-items-center justify-content-center gap-2'>

                        <img src={currentUser.avatar} alt="this is avatar" className='avatar' width={40} height={40} style={{ borderRadius: '50%' }} />
                        <div className='d-flex flex-column'>
                            <span className='user-name fs-5 text'>{currentUser.name}</span>
                        </div>

                        <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ background: 'none', border: 'none' }}
                        >
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login'><i className="fa-solid fa-circle-user text-primary"></i></Link>
                )}


            </div>
        </div>
    )
}

export default Navbar
