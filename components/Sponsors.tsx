import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-[#88C57F] min-h-screen flex flex-col items-center justify-center py-24">
      
      {/*Header*/}
      <div className="text-center mb-8 z-10">
        <h2 className="text-4xl md:text-5xl font-medium mb-12 text-white">
          Interested in Sponsoring GrizzHacks?
        </h2>

        {/*Sub-header*/}
        <div className="w-full max-w-6xl mx-auto px-8 text-left">
          <p className="text-xl text-white/90 font-medium">
            Last Year We Had...
          </p>
        </div>
      </div>

      {/*Content*/}
      <div className="relative w-full max-w-6xl px-4">
        
        {/*Flowers*/}
        <Image
          src="/sponsor_interest.svg"
          alt="Sponsor Interest"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />

        <div className="absolute inset-0 grid grid-cols-3 text-center items-center text-white">
          
          {/* Purple Flower */}
          <div className="flex flex-col items-center justify-center pt-4">
            <span className="text-sm font-medium">Over</span>
            <span className="text-5xl md:text-7xl font-bold leading-tight">170</span>
            <p className="text-xs md:text-sm max-w-[120px] leading-tight mt-1">
              Enthusiastic Hackers ready to change the world at GrizzHacks 7
            </p>
          </div>

          {/*Orange Flower*/}
          <div className="flex flex-col items-center justify-center pt-10">
             <span className="text-sm font-medium">Over</span>
             <span className="text-5xl md:text-7xl font-bold leading-tight">50</span>
             <p className="text-xs md:text-sm max-w-[120px] leading-tight mt-1">
               Incredible Projects demoed at GrizzHacks 7
             </p>
          </div>

          {/*Red Flower*/}
          <div className="flex flex-col items-center justify-center pt-4">
             <span className="text-sm font-medium">Some Text</span>
             <span className="text-5xl md:text-7xl font-bold leading-tight">40%</span>
             <p className="text-xs md:text-sm max-w-[120px] leading-tight mt-1">
               find real stat soon
             </p>
          </div>

        </div>
      </div>

    </section>
  );
}