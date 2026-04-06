import { ChevronLeft, ChevronRight } from "lucide-react";
import herobg from "../../assets/herobg.jpg"; 

const HeroCard = () => {
  return (
  <div className="relative  min-h-[391px] bg-cover bg-center border rounded-[20px]"

  style={{ backgroundImage: `url(${herobg})` }}
>
      <div className="absolute inset-0 "></div> {/* overlay */}

     <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md text-white p-6 rounded-lg bg-[#00000099] min-h-[265px]">

 

        <h1 className="text-3xl font-bold mb-2">Game of Thrones</h1>

        <div className="flex items-center gap-2 mb-4 ">
          <span className="bg-yellow-500 text-black px-1 py-1 rounded font-semibold text-sm">
            IMDb 9.2
          </span>
          <span className="text-sm">Action</span>
          <span className="text-sm">Adventure</span>
          <span className="text-sm">Drama</span>
        </div>

        <p className="text-sm mb-6">
          It’s the story of the intricate and bloody battles of several noble
          families in the fictional land of Westeros. These families, including
          the Starks, the Lannisters, and the Targaryens, fight for control of
          the Iron Throne, the symbol of power in the Seven Kingdoms.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-black px-10 py-2 rounded font-bold hover:bg-yellow-600 transition">
            WATCH
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-10 py-2 rounded font-bold hover:bg-yellow-500 hover:text-black transition">
            Trailer
          </button>
        </div>
      </div>

      {/* Optional carousel arrows */}
      <div className="absolute bottom-4 right-8 flex gap-4">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer">
          <ChevronLeft size={18} className="text-black" />
        </div>
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer">
          <ChevronRight size={18} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
