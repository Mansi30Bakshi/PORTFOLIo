import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMore } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-black text-white flex flex-row justify-between items-center  py-1'>
        <img src='https://media1.thehungryjpeg.com/thumbs2/ori_3902465_ryqjd5rbrsvhu2sv2isourrilw45wkb0knq8j5ge_mb-monogram-logo-v5.jpg' className='h-24'></img>
        <ul className='space-x-7 font-mono text-xl'>
        <Link to="https://www.linkedin.com/in/mansi-bakshi-386b762a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRf2rltBqTqSq%2BxP8jXegow%3D%3D" className='hover:text-white hover:border-b hover:border-white'>Linkedin</Link>
        <Link to="https://drive.google.com/file/d/16FUgSHt9VdlCzxpl9fasEvTq5nCzl4i1/view?usp=sharing" className='hover:text-white hover:border-b hover:border-white'>Resume</Link>
        <Link to="https://github.com/Mansi30Bakshi" className='hover:text-white hover:border-b hover:border-white'>Github</Link>


        </ul>
        <div className="relative">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <MdMore className="h-9 w-12 text-white pr-4" />
          </div>
          {isOpen && (
            <ul className="absolute right-0 top-full bg-black text-white p-4 rounded shadow w-40">
              <li><Link to="/" className='mt-2 font-mono'>Home</Link></li>
              <li><Link to="/about" className='mt-2 font-mono'>About Me</Link></li>
              <li><Link to="/skills" className='mt-2 font-mono'>Skills</Link></li>
              <li><Link to="/projects" className='mt-2 font-mono'>Projects</Link></li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
