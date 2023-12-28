//import Link from 'next/link';
//import { Navbar } from 'flowbite-react';

import BasicNavigation from "./BasicNavigation";
import BasicOutlet from "./BasicOutlet";

//import { Link, Outlet } from "react-router-dom";
//import { NavbarLink } from '../../global/tools';

const Layout: React.FC = () => {

  return (
    <>
      {/* Below is an attempt to use flowbite react components. Works but still studying it.
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavbarLink to={`${baseUrl}`} text="Home" className='mr-3 h-6'/>
          <NavbarLink to={`${baseUrl}/about`} text="About" className='mr-3 h-6'/>
          <NavbarLink to={`${baseUrl}/dashboard`} text="Dashboard" className='mr-3 h-6'/>
          <NavbarLink to={`${baseUrl}/nothing-here`} text="Nothing Here" className='mr-3 h-6'/>
        </Navbar.Collapse>
      </Navbar>
  */}
      {/* Below is a basic nav layout without styling attempt
        {/* A "layout route" is a good place to put markup you want to
                share across all the pages on your site, like navigation. 
        <nav>
          <ul>
            <li>
              <Link to={`${baseUrl}`}>Home</Link>
            </li>
            <li>
              <Link to={`${baseUrl}/about`}>About</Link>
            </li>
            <li>
              <Link to={`${baseUrl}/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${baseUrl}/nothing-here`}>Nothing Here</Link>
            </li>
          </ul>
        </nav>

        <hr />
        */}

      {/* Below is an Outlet without styling attempt. An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. 
        
      <Outlet />*/}


      {/** Let's do basic styling with tailwind aided by flowbite*/}
      <BasicNavigation />
      <BasicOutlet />

    </>
  );
}

export default Layout;