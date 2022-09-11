import React from "react";
import NavBarItems from './NavBarItems'
import menuEntries from '../../utils/menuEntries'

import logo from "../../../images/logo.png";

const Navbar = () => {

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <NavBarItems menuEntries={menuEntries}/>
    </nav>
  );
};

export default Navbar;
