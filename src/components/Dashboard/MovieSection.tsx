import img from '../../assets/shogun.jpg';
import bola from '../../assets/bola.jpg';
import kiz from '../../assets/kiz.png';
import { Play } from "lucide-react";


export default function MovieSection() {
  return (
    <div className="p-4  min-h-auto">
      <div className="grid grid-cols-3 gap-4  p-2 rounded-xl">

        {/* LEFT SIDE */}
        <div className="col-span-2 flex flex-col gap-4">

          {/* TOP BIG CARD */}
          <div className="relative h-[387px] rounded-xl overflow-hidden">
            <img
              src={img}
              alt="shogun"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0  p-4 flex flex-col justify-center text-[#E5E5E5]">
              <p className="text-sm opacity-70 mb-2">
                Uncovering Secrets, Shifting Powers
              </p>

              <h1 className="text-5xl font-[Impact] font-normal text-yellow-400 mb-3">
                Shogun
              </h1>

              <p className="text-sm max-w-md opacity-80 mb-4 ">
                When a mysterious European ship sinks near a nearby
                fishing village, Lord Yoshi Toranaga uncovers secrets
                that could tip the balance of power and devastate his
                enemies. He must act quickly to protect his realm from
                the looming threat.
              </p>

              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full w-fit flex items-center gap-2">
                <Play size={18} />
                Watch now
              </button>

            </div>
          </div>

          <div className="relative h-[387px] rounded-xl overflow-hidden">
            {/* Image */}
            <img
              src={bola}
              alt="sympathizer"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Button (TOP LEFT) */}
            <button className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full flex  gap-2 z-20">
              <Play size={18} />
              Watch now
            </button>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-6 pb-6">

              <p className="text-sm opacity-70 mb-2">
                Historical, Drama, Thriller
              </p>

              <h1 className="text-5xl font-[Impact] font-normal leading-none">
                The Sympathizer
              </h1>

            </div>

          </div>


        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-full rounded-xl overflow-hidden">
          <img
            src={kiz}
            alt="small light"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between text-white">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full w-fit flex items-center gap-2">
              <Play size={18} />
              Watch now
            </button>

            <div className='absolute inset-0 flex flex-col justify-end items-center text-white text-center px-6 pb-6'>
              <p className="text-sm text-yellow-400 mb-2">
                RISK EVERYTHING
              </p>
              <h1 className="text-5xl font-[Impact] font-normal">
                A Small Light
              </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
