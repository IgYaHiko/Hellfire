'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { ASSETS } from '@/public/assets/images/img'
import Stats from './stats'
import { authClient } from '@/lib/auth-client'

const Hero = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hellfire wakeup')
  }

  return (
    <section className='py-10 overflow-x-clip'>
        <div className='container mx-auto px-3 md:px-0 '>
            <div className='flex flex-col items-center  relative'>
                <div className='text-center font-mono border px-4 py-1 rounded-2xl w-fit'>
                    <p>Now available: HELLFIRE CLI 🔥</p>
                </div>
                <h1 className='text-6xl mt-4 md:mt-2 font-black text-center font-[poppins]'>Code Faster. Burn Complexity.</h1>
                <div className='text-center w-fit text-base mt-4 px-0 md:px-28 font-mono'>
                    <p>Hellfire CLI automates your workflow with blazing-fast commands. Generate code, deploy projects, and eliminate config chaos—all from your terminal. Ship faster, code smarter.</p>
                </div>

            <div className='absolute -top-20 -right-9/12'>
                <Image
                 alt=''
                 src={ASSETS.SWORD}
                 className='h-[300px] object-contain'
                />
            </div>
            <div className='absolute -top-20 -left-9/12'>
                <Image
                 alt=''
                 src={ASSETS.CHAIN}
                 className='h-[300px] object-contain'
                />
            </div>
            </div>

            {/* Installation Command Bash */}
            <div className="max-w-xl mx-auto mt-8">
                <div className="dark:bg-neutral-900 bg-gray-200 rounded-lg border dark:border-gray-700 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-300 dark:bg-neutral-950 border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 dark:bg-neutral-600 bg-amber-300 rounded-full"></div>
                            <div className="w-3 h-3 dark:bg-neutral-700 bg-amber-400 rounded-full"></div>
                            <div className="w-3 h-3 dark:bg-neutral-800 bg-amber-200 rounded-full"></div>
                        </div>
                        <span className="text-sm  font-mono">bash</span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <code className=" text-xs font-mono ">
                                $ hellfire wakeup
                            </code>
                            <Button 
                                onClick={copyToClipboard}
                                variant="ghost" 
                                size="sm"
                                className=""
                            >
                               <Copy/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 mt-10 ">
                {/* Your content here */}
               <Link
                href={"/auth/sign-in"}
                >
               <Button className='font-mono font-semibold rounded-full py-6 px-10'>Get Started for free</Button>
               </Link>
            
               <Stats/>
            </div>

        </div>
    </section>
  )
}

export default Hero