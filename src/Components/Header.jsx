
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from '@nextui-org/react'
import { IoMdSearch } from "react-icons/io";
import { FaRegBell, FaAngleDown } from "react-icons/fa";
import { useContext, useState } from 'react';
import { DashboardContext } from './DashboardContext';
import { FaTimes } from "react-icons/fa";




export default function Header() {

  const {handleSearchUser, searchUser, toggleDarkMode, isDark} = useContext(DashboardContext)
  const [showSearchInput, setShowSearchInput] = useState(false)

  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput)
  }

  return (
    <Navbar className={`${isDark ? "bg-black text-white border-b border-white" : "bg-white"} flex-1 flex flex-col overflow-hidden ${showSearchInput ? "h-20" : "h-16"} w-full lg:w-screen`}>
      <NavbarBrand>
        <div className='flex items-center relative w-full h-full'>
        <IoMdSearch
            className={`text-gray-700 lg:hidden cursor-pointer ${showSearchInput ? "hidden" : "flex"}`}
            size={30}
            onClick={toggleSearch}
          />

          {/* Mobile Search Input */}
            {showSearchInput && (
              <div className={`lg:hidden w-full bg-white border shadow-xl pr-2 
               ${showSearchInput ? "flex flex-col justify-center items-center" : "hidden"} transition-all duration-500 ease-in-out`}>
                <FaTimes  className="self-end" onClick={toggleSearch}/>
                <Input
                  clearable
                  value={searchUser}
                  onChange={handleSearchUser}
                  startContent={<IoMdSearch className="text-gray-700" size={20}/>}
                  placeholder="Search..."
                  className="focus:outline-none active:outline-none p-2 rounded-md ml-2"
                  classNames={{
                    inputWrapper: isDark ? "bg-[#202022]" : "",
                  }}
                />
              </div>
            )}
             {/* Desktop Search Input */}
            <Input
            clearable
            value={searchUser}
            onChange={handleSearchUser}
            startContent={<IoMdSearch className="text-gray-700" size={20}/>}
            placeholder="Search..."
            className="focus:outline-none active:outline-none p-2 rounded-md hidden lg:flex" 
            classNames={{
              inputWrapper: isDark ? "bg-[#202022]" : ""
                 
            }}
        />

        </div>
      
        
      
      </NavbarBrand>
      <NavbarContent className={`${showSearchInput ? "hidden" : "flex"}`} justify='end'>
          <NavbarItem>
            <Switch onClick={toggleDarkMode}/>
          </NavbarItem> 
          <NavbarItem>
            <FaRegBell size={20}/>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger className='flex items-center justify-around cursor-pointer'>
                <div className='flex items-center justify-between gap-4'>
                  <Avatar text="JD" className="bg-gray-200" size='20'/>
                  <span className="lg:text-xl font-medium">John Doe</span>
                  <FaAngleDown className="text-gray-400" size={25}/>
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout">Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
