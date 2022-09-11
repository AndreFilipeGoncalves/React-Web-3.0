import React from 'react'
import NavBarMobileItems from './NavBarMobileItems'
import NavBarItem from './NavBarItem'

const NavBarItems = ({menuEntries}) => {

    return (
        <React.Fragment>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
              {menuEntries.map((item, index) => (
                <NavBarItem key={item + index} title={item} />
              ))}
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
              </li>
            </ul>
            <NavBarMobileItems menuEntries={menuEntries}/>
        </React.Fragment>
    )
}

export default NavBarItems
