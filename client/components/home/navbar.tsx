'use client';

import React, { useState, useRef } from 'react';
/* import { useRouter } from 'next/router'; */
import Image from 'next/image';

import { GithubIcon, Menu, X } from 'lucide-react'; // ✅ Lucide icons
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation'
import { icons } from '@/public/assets/icons/icons';
import Link from 'next/link';

// Adjust your color system if needed
/* const colors = {
  primary: '#3c096c',
  white: '#ffffff',
}; */

interface NavbarProps {
  title?: string;
  styless?: string;
  darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
 
  const [isOpen, setIsOpen] = useState(false);
   const router = useRouter(); 
  const menuRef = useRef<HTMLDivElement>(null);


  return (
    <section className="py-2 sticky top-0 z-50">
      <div className="container px-4 md:px-20 lg:px-2 mx-auto">
        <div className="flex items-center justify-between  rounded-full   px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[100px] flex ">
              <Image
                src={icons.HELL_FIRE}

                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
                
              />
              <span className='font-bold text-4xl flex items-center gap-3' style={{fontFamily: "poppins"}}>HELLFIRE. </span>
            </div>
            
          </div>

          {/* Desktop Nav */}
         

          {/* Right Section */}
          <div className="flex items-center gap-0">
            {/* Mobile Menu Toggle */}
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-0 cursor-pointer">
              {isOpen ? (
                <X color="white" size={20} />
              ) : (
                <Menu  className='' size={20} />
              )}
            </div> 

            {/* Desktop Auth Buttons */}
              
              <div className='space-x-5 flex items-center justify-center'>
                
           <Link
            href={"/auth/sign-in"}
           >
            <Button className='rounded-none font-mono font-semibold'>SignIn</Button>
           </Link>
            

            <Link
             href={"https://github.com/IgYaHiko"}
            >
             <Button
               className=''
               variant={"ghost"}
              >
                <GithubIcon className='size-5' />
              </Button>
            </Link>
          </div>
          
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 backdrop-blur-md bg-neutral-900/70 flex flex-col items-center justify-center gap-8">
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-10 text-2xl hover:text-red-400 transition"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>

            <div ref={menuRef} className="flex flex-col items-center gap-6">

              <div className="flex flex-col  text-lg items-center gap-4 ">
                <Button className='relative overflow-hidden font-mono  rounded-none
                       bg-gra'
            style={{
              animation: 'shine 2s linear infinite',
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
            }}>
                    Sign In
                  </Button>
                 <Button variant={"outline"} className='rounded-none' >
                    Sign Up
                  </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;