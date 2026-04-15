import ChartSection from './ChartSection'
import Genres from './Genres'
import Legend from './Legend'

import MovieSection from './MovieSection'
import MyWatchlist from './MyWatchlist'
import TopMovies from './TopMovies'
import TopSeries from './TopSeries'
import Trailer from './Trailer'
import TrendingMovies from './Trending'
import TrandingSeries from './TrendingSeries'
import TrendingTVShows from './TrendingTvShows'

function Dashboard() {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">

      {/* SINGLE CONTAINER (ENG MUHIM FIX) */}
      <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 overflow-x-hidden">

        <ChartSection />

        <TrendingMovies />

        <Trailer />

        <TrandingSeries />

        <Genres />

        <MovieSection />

        <TopSeries />

        <TopMovies />

        <TrendingTVShows />

        <MyWatchlist />

      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Legend />
      </footer>

    </div>
  )
}

export default Dashboard
