import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-[#0B6B4B] min-h-screen flex flex-col items-center justify-center py-20">
      
      {/*Header*/}
      <div className="text-center mb-5 z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
          Interested in Sponsoring GrizzHacks?
        </h2>
      </div>

      {/*Subheader*/}
      <div className="w-full max-w-6xl mx-auto text-left mb-8 pl-4 md:pl-0">
        <p className="text-xl text-white/90 font-medium">
          Last Year We Had...
        </p>
      </div>
      
      {/*Flowers*/}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20 px-4">
        
        {/*Purple Flower*/}
        <FlowerCard 
            imageSrc="/purple_flower.svg" 
            color="text-white"
            scale={1.5}
        >

          {/* --- POSITIONING WRAPPER ---
              This <div> wraps all the text so we can move it together.
              - translate-x-2:  Moves text RIGHT (increase number to move further)
              - -translate-x-2: Moves text LEFT
              - translate-y-4:  Moves text DOWN
              - -translate-y-4: Moves text UP
          */}
            <div className="-translate-x-8 -translate-y-2">
              <span className="block text-base font-medium mb-[-5px]">Over</span>
              <span className="block text-6xl md:text-7xl font-bold leading-tight">170</span>
              <p className="text-sm max-w-[140px] mx-auto leading-tight mt-1 font-medium">
                Enthusiastic Hackers ready to change the world
              </p>
            </div>
        </FlowerCard>

        {/*Orange Flower*/}
        <FlowerCard 
            imageSrc="/orange_flower.svg" 
            color="text-white" 
            scale={1.5}
        >
            <div className="-translate-x-0 -translate-y-2.5">
              <span className="block text-base font-medium mb-[-5px]">Over</span>
              <span className="block text-6xl md:text-7xl font-bold leading-tight">50</span>
              <p className="text-sm max-w-[160px] mx-auto leading-tight mt-1 font-medium">
                Incredible projects demoed at GrizzHacks 7
              </p>
            </div>
        </FlowerCard>

        {/*Red Flower*/}
        <FlowerCard 
            imageSrc="/red_flower.svg" 
            color="text-white" 
            scale={1.2}
        >

            <div className="translate-x-3.5 -translate-y-3">
              {/*<span className="block text-base font-medium mb-[-5px]">Exactly</span>*/}
              <span className="block text-6xl md:text-7xl font-bold leading-tight">10</span>
              <p className="text-sm max-w-[160px] mx-auto leading-tight mt-1 font-medium">
                Universities represented at GrizzHacks 7
              </p>
            </div>
        </FlowerCard>

      </div>

      {/*Footer*/}
      <div className="text-center space-y-2 px-4 z-10">
        <h3 className="text-2xl md:text-3xl font-normal text-white">
          Interested in being a part of GrizzHacks?
        </h3>
        <p className="text-2xl md:text-3xl font-normal text-white">
          Fill out our interest form <a href="https://forms.gle/Wr1DTSs2mJ955YWWA" target="_blank" className="underline decoration-white/50 hover:decoration-white transition-all">here</a>!
        </p>
      </div>

    </section>
  );
}

function FlowerCard({ 
  children, 
  imageSrc, 
  color,
  scale = 1
}: { 
  children: React.ReactNode, 
  imageSrc: string, 
  color?: string,
  scale?: number
}) {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80 shrink-0">
      
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `scale(${scale})` }}
      >
        <Image 
          src={imageSrc} 
          alt="Flower Background" 
          fill
          sizes="(max-width: 768px) 288px, 320px"
          className="object-contain" 
        />
      </div>

      <div className={`relative z-10 text-center translate-y-2 ${color}`}>
        {children}
      </div>
    </div>
  );
}