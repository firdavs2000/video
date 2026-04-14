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
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {/* MAIN */}
      <div className="
        flex-1 
        w-full 
        mx-auto 
        px-4 sm:px-6 lg:px-8
        xl:max-w-[1440px]
      ">
        <ChartSection />
        <TrendingMovies /> 
        <Trailer />
        <TrandingSeries />
        <Genres />
        <MovieSection />
        <TopSeries />
        <TopMovies />

      </div>

      {/* FOOTER */}
      <div className="
        w-full 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        xl:max-w-[1440px]
      ">
        <Legend />

      </div>
      <div className="
        flex-1 
        w-full 
        mx-auto 
        px-4 sm:px-6 lg:px-8
        xl:max-w-[1440px]
        pt-10
      ">
        <TrendingTVShows />
        <MyWatchlist />
      </div>
    </div>
  )
}


export default Dashboard
