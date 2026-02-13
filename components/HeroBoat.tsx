import Image from "next/image";

export default function HeroBoat() {
  return (
    <a
      href="https://form.typeform.com/to/E7FQOwID" 
      target="_blank"
      rel="noopener noreferrer"

      //style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      className="absolute bottom-[55vw] left-1/2 -translate-x-1/2 w-40 transition-transform duration-300 hover:scale-105 md:bottom-[30%] md:left-[45%] md:w-64"
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
