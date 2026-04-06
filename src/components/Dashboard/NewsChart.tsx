import { Verified } from "lucide-react";
import img from "../../assets/news.jpg";

const NewsCard = () => {
  return (
    <div className="relative w-full max-w-[308px] mx-auto">

      {/* Rotated sariq card */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-xl rotate-[-2deg] shadow-md"></div>

      {/* Old qora card */}
      <div className="relative bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        
        {/* Image section */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={img}
            alt="Slow Horses"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content section */}
        <div className="p-4 flex flex-col gap-2">
          {/* Label */}
          <span className="text-yellow-400 font-semibold text-sm flex items-center gap-1">
            <Verified size={16} />
            Hot News
          </span>

          {/* Main text */}
          <p className="text-sm leading-relaxed">
            "Slow Horses," the popular spy drama, has been renewed for a fifth season,
            much to the delight of its dedicated fanbase. The highly anticipated fourth season
            is set to premiere on September 4, 2024, promising more thrilling storylines
            and complex characters that viewers have come to love. Notable cast members,
            including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring
            depth and intrigue to the series.
          </p>
          <p className="text-sm leading-relaxed">
            Fans are excited to see the continuation of the dark and witty espionage tales
            that have made the series a critical and commercial success. Each episode
            promises to dive deeper into the morally ambiguous world of MI5 agents,
            offering suspense, humor, and unforgettable performances.
          </p>
          <p className="text-sm leading-relaxed">
            Viewers can expect intricate plots, high-stakes missions, and the signature
            slow-burn tension that has become the hallmark of "Slow Horses." This season
            aims to surpass expectations and deliver another round of edge-of-your-seat
            entertainment.
          </p>

          {/* Date */}
          <span className="text-gray-400 text-xs mt-2">25 July</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
