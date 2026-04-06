import ChartSection from './ChartSection'
import Genres from './Genres'
import Legend from './Legend'

import MovieSection from './MovieSection'
import TopMovies from './TopMovies'
import TopSeries from './TopSeries'
import Trailer from './Trailer'
import TrendingMovies from './Trending'
import TrandingSeries from './TrendingSeries'

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      
      {/* Bosh qismi — o‘sib boradigan bo‘limlar */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto">
        <ChartSection />
        <TrendingMovies />
        <Trailer />
        <TrandingSeries />
        <Genres />
        <MovieSection />
        <TopSeries />
        <TopMovies/>
      </div>

      {/* Pastki bo‘lim — Legend doimo pastda */}
      <div>
        <Legend />
      </div>
    </div>
  )
}

export default Dashboard
