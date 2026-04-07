import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import "../../index.css";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
};

export default function TrandingSeries() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies()
      .then((data: Movie[]) => {
        setMovies(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="py-10">
      <div className=" px-4">
        
        {/* TITLE */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Recomende for you
          </h2>

          <button className="text-sm text-gray-300 hover:text-white">
            View All →
          </button>
        </div>

        {/* SCROLL */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4">

            {movies.map((item) => {
              const imageUrl =
                item.poster_path && item.poster_path.startsWith("/")
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image";

              return (
                <div
                  key={item.id}
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                >
                  {/* IMAGE */}
                  <div
                    className="h-[240px] sm:h-[260px] md:h-[280px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white/90 p-3 rounded-full">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                        alt="play"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 p-3 text-white">
                    <p className="text-xs opacity-70">
                      {item.release_date
                        ? new Date(item.release_date).getFullYear()
                        : "No date"}
                    </p>

                    <h4 className="font-semibold text-sm line-clamp-1">
                      {item.title}
                    </h4>

                    <p className="text-xs opacity-80 line-clamp-2">
                      {item.overview || "No description"}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
