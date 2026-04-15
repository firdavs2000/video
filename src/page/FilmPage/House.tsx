import React from "react";

export default function HeroCard() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg">

      {/* LEFT IMAGE */}
      <div className="relative w-[35%]">
        <img
          src="https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg"
          alt="House of the Dragon"
          className="w-full h-full object-cover"
        />

        {/* overlay dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[65%] p-8 text-white relative">
        {/* background blur image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        <div className="relative z-10">
          {/* Title */}
          <h1 className="text-3xl font-bold">
            House of the Dragon{" "}
            <span className="text-gray-400 text-lg">(2022-)</span>
          </h1>

          {/* Meta */}
          <p className="text-sm text-gray-400 mt-2">
            TV Series · 50m · TV-MA
          </p>

          {/* Genres */}
          <div className="flex gap-2 mt-3">
            {["Action", "Adventure", "Drama"].map((g) => (
              <span
                key={g}
                className="px-3 py-1 text-xs bg-gray-700 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 mt-4 max-w-[500px] leading-relaxed">
            The Targaryen dynasty is at the absolute apex of its power, with more
            than 10 dragons under their yoke. Most empires crumble from such
            heights...
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
              Play Last Episode
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
