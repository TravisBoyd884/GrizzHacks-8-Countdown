import Image from "next/image";

export default function HeroBoat() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSd6GW3csAmCLZfZWuXwkQOYYuk1ZP0iauyuwh28QMN0ekvEWA/viewform?usp=dialog" 
      target="_blank"
      rel="noopener noreferrer"

      //style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      className="absolute bottom-[25%] left-[40%] w-64 transition-transform duration-300 hover:scale-105 md:bottom-[30%] md:left-[45%] md:w-64"
      title="GrizzHacks 8 Interest Form"
    >
      <Image
        src="/sailboat-gh8-asset-text.svg"
        alt="Boat Link"
        width={500} 
        height={500}
        className="object-contain" 
      />
    </a>
  );
}
