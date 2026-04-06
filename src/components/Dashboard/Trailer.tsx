import { Play } from "lucide-react";
import img from "../../assets/bgpeaky.png";
import shelby from "../../assets/peaky.png";
import obloko from '../../assets/oblako.png';

export default function HeroSection() {
  return (
    <div className="relative h-[450px]  rounded-[20px] overflow-visible mt-[100px]">

      {/* Background */}
      <img
        src={img}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Shelby image (asosiy highlight 🔥) */}
      <img
        src={shelby}
        alt="shelby"
        className="absolute z-20 left-1/2 -translate-x-1/2 top-[-120px] h-[520px] object-contain pointer-events-none"
      />
      <img
        src={obloko}
        alt="oblako"
        className="absolute z-20 left-1/2 -translate-x-1/2 top-[60px]  h-[540px] object-contain pointer-events-none"
      />
      <div className="absolute z-30 left-1/2 -translate-x-1/2 top-[292px]  text-white">
        <p className="tracking-widest text-sm opacity-70 left-[300px] absolute">
          BIRMINGHAM 1919
        </p>

        <p className="text-[64px] font-black leading-[100%] font-playfair">
          Peaky Blinders
        </p>
      </div>




      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-5xl w-full text-[#808080]">


          <div className="flex justify-between px-60 text-xl tracking-widest opacity-70 mb-6 ">
            <span>SHELBY</span>
            <span>DISTILLERY</span>
          </div>

          {/* Main box */}
          <div className="border-2 border-white/50  bg-[#00000080] 
          p-6 md:p-10 flex flex-col md:flex-row min-h-[280px] 
          items-center justify-between gap-6 backdrop-blur-md rounded-xl">

            {/* Text */}
            <div className="max-w-[279px]">
              <p className="text-[24px] font-[Bebas Neue] font-normal text-natural/50 leading-[100%]">
                Peaky Blinders is a British crime drama about the Shelby family in post-World War I Birmingham,
                as they build their power through criminal activities. Led by the cunning Tommy Shelby,
                the show mixes intense drama with historical grit.
              </p>
            </div>

            {/* Button */}
            <button
              className="absolute z-40 top-[120px] right-[60px] 
  flex items-center gap-3 text-[18px] font-medium 
  text-yellow-400 hover:scale-105 transition"
            >
              <span className="bg-yellow-400 text-black p-2 rounded-full">
                <Play size={14} />
              </span>
              WATCH TRAILER
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
