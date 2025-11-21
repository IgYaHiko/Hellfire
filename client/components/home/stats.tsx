import React from 'react'
import Image from 'next/image'
import { developers } from '@/constant/data'

const Stats = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Main heading */}
          <h2 className="text-xs md:text-xs font-mono font-semibold text-foreground mb-2">
            Join 80,000+ developers
          </h2>
          
          {/* User avatars/images */}
         <div className="flex -space-x-3 mb-2 overflow-hidden">
  {developers.map((item) => (
    <Image
      key={item.id}
      src={item.image}
      alt=""
      width={40}
      height={40}
      className="w-12 h-12 rounded-full object-cover"
    />
  ))}

  <div className="w-12 h-12 rounded-full  border-2 border-background bg-amber-200 dark:bg-neutral-700 flex items-center justify-center">
    <span className="text-xs font-bold text-muted-foreground">+</span>
  </div>
</div>

          
      
        </div>
      </div>
    </section>
  )
}

export default Stats