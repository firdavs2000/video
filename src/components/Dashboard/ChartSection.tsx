import HeroCard from "./Hero";
import NewsCard from "./NewsChart";
import RecomendedChart from "./Recomended";

function ChartSection() {
  return (
    <div className="max-w-[1440px] w-full px-4  sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <HeroCard />
          <RecomendedChart />
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-1 pr-4">
          <NewsCard />
        </div>

      </div>
    </div>
  );
}

export default ChartSection;
