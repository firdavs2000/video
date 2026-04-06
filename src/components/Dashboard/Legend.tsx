import left from '../../assets/left.jpg';
import right from '../../assets/right.jpg';
import tomhardy from '../../assets/tomhardy.png'

function Legend() {
  return (<div className="relative max-w-[1440px] w-full mx-auto h-[450px] rounded-[20px] overflow-visible top-[50px]">
    {/* Left image with semi-transparent overlay */}
    <div className="absolute left-0 top-0 h-full w-1/2">
      <img
        src={left}
        alt="left"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#B8960CCC]"></div>
    </div>

    {/* Right image with gradient overlay */}
    <div className="absolute right-0 top-0 h-full w-1/2">
      <img
        src={right}
        alt="right"
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(270deg, rgba(0,0,0,0.85) 55.58%, #000000 67.3%)'
        }}
      ></div>
    </div>

    {/* Tom Hardy image */}
    <div className="absolute z-20 left-1/2 -translate-x-1/2  sm:-top-24 md:-top-18 top-10 pointer-events-none">
      <img
        src={tomhardy}
        alt="Tom Hardy"
        className="h-[300px] sm:h-[400px] md:h-[520px] object-cover"
      />
    </div>
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none flex flex-col justify-end items-center text-center gap-4 pb-16">
      <p className="text-4xl sm:text-5xl font-[Poppins] text-[#E5E5E5] z-20">
        Tom Hardy
      </p>

      <p className="text-9xl font-[Impact] text-[#E7BC0F] z-20 select-none pointer-events-none">
        LEGEND
      </p>

      <p className="text-lg sm:text-xl font-[Poppins] text-[#E5E5E5] z-20">
        THE NOTORIOUS TRUE STORY OF THE KRAY TWINS
      </p>
    </div>
  </div>
  );
}

export default Legend;
