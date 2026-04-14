import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getTrendingTV } from "../../services/api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Movie = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
};

export default function MyWatchList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTrendingTV();
        setMovies(data.results || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
    return <p className="text-white text-center py-20">Loading...</p>;
  }

  return (
    <section className="py-10 bg-gray-900">
      <div className="px-4 max-w-[1440px] mx-auto">
        <h2 className="text-2xl text-white font-bold mb-6">
          Trending TV Shows
        </h2>

        <Slider {...settings}>
          {movies.map((item) => {
            const imageUrl = item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://via.placeholder.com/500x750";

            return (
              <div key={item.id} className="px-2">
                <div className="relative rounded-2xl overflow-hidden hover:scale-105 transition">

                  <div
                    className="h-[340px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-0 p-3 text-white">

                    <p className="text-xs opacity-70">
                      {item.first_air_date
                        ? new Date(item.first_air_date).getFullYear()
                        : "No date"}
                    </p>

                    <h4 className="font-semibold text-sm line-clamp-1">
                      {item.name}
                    </h4>

                    <p className="text-xs opacity-80 line-clamp-2">
                      {item.overview || "No description"}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
