'use client';

import React, { useState, useRef } from 'react';
/* import { useRouter } from 'next/router'; */
import Image from 'next/image';

import { GithubIcon, LogOut, Menu, Moon, X } from 'lucide-react'; // ✅ Lucide icons
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";

import { useRouter } from 'next/navigation'
import { icons } from '@/public/assets/icons/icons';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { se } from 'date-fns/locale';

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
 const { data: session } = authClient.useSession();
const { theme, setTheme } = useTheme();


  return (
    <section className="py-2 sticky top-0 z-50">
      <div className="container px-4 md:px-20 lg:px-2 mx-auto">
        <div className="flex items-center justify-between  rounded-full   px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className=" flex ">
              <Image
                src={icons.HELL_FIRE}

                alt="Logo"
                width={70}
                height={70}
                className="object-contain"
                
              />
              <span className='font-bold text-2xl flex items-center gap-3' style={{fontFamily: "poppins"}}>HELLFIRE. </span>
            </div>
            
          </div>

          {/* Desktop Nav */}
          <div className='flex items-center font-mono gap-5'>
            <Link className='hidden md:block' href={"/docs"}>
                Docs
            </Link>
             <Link className='md:block hidden' href={"/review"}>
                Review  
            </Link>
             <Link className='hidden md:block' href={"/contact"}>
                Contact
            </Link>
          </div>
         

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

            <Button
  variant="ghost"
  className="mr-2"
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
  <Moon className="size-5" />
</Button>

              {
                session?.user ? (
                       <div className='flex items-center gap-2'> 
                          <Button
               className=''
               variant={"ghost"}
              >
                <GithubIcon className='size-5' />
              </Button>
                      <Button
                       variant={'ghost'}
                      className=' font-mono font-semibold'
                       onClick={() => authClient.signOut()}
                      >
                       <LogOut/>
                      </Button>

                      

              <Image
                            src={session?.user?.image ?? ''}
                            alt="User"
                            width={32}
                            height={32}
                            className="rounded-full border"
      /> 
 
                       </div>
          
                ) : (
                       <div className='gap-2 flex items-center justify-center'>
                
           <Link
            href={"/auth/sign-in"}
           >
            <Button className='rounded-none font-mono font-semibold'>SignIn</Button>
           </Link>
            

            <Link
             href={"https://github.com/IgYaHiko"}
            >
            
            </Link>

             <Button
               className=''
               variant={"ghost"}
              >
                <GithubIcon className='size-5' />
              </Button>
          </div>
          
                )
              }

          
    
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