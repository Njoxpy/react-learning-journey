// import react router dom library
import {NavLink, Link, Outlet} from 'react-router-dom'

const RootLayout = () => {
    return (
        <main>
            <div>
                <h1>Basic Navigation Site</h1>
                <nav>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="services">Services</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="Contact">Contact</NavLink>
                </nav>
            </div>
            <Outlet />
        </main>
    );
}
 
export default RootLayout;