"use client"
import GoogleProvider from '@/components/button/oAuth/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { icons } from '@/public/assets/icons/icons'

import Image from 'next/image'
import Link from 'next/link'


export default function LoginPage() {
 
    return (
         <form
             
                action=""
                className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
                <div className=" pb-4 px-4">
                    <div className='flex flex-col items-center'>
                        <Link
                            href="/"
                            aria-label="go home">
                             <Image
                                alt=''
                                src={icons.HELL_FIRE}
                                className='w-32 h-32 object-contain'
                            
                                                        />
                        </Link>
                        <h1 className="mb-1 text-2xl text-center font-[poppins] font-black ">Sign In to HELLFIRE.</h1>
                        <p className="text-sm font-mono text-center">Welcome back! Sign in to continue</p>
                    </div>

                    

                    <hr className=" mt-4 mb-4 border-dashed" />
                  <div className='max-w-xs flex flex-col items-center space-y-5'>
  <Button
    type="button"
    variant="outline"
    className="w-full flex items-center gap-2 justify-center py-6"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52
      .28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2
      -.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04
      2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 
      0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
    <span className="font-mono font-semibold">Github</span>
  </Button>
  <GoogleProvider/>
</div>

                  
                </div>

                <div className="bg-muted rounded-(--radius) border p-3">
                    <p className="text-accent-foreground font-mono text-center text-xs">
                        Don't have an account ?
                        <Button
                            asChild
                            variant="link"
                            className="px-2 text-xs">
                            <Link href="sign-up" >Create account</Link>
                        </Button>
                    </p>
                </div>
            </form>
    )
}