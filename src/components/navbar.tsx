import roboImpactLogo from "../assets/images/roboimpact-logo.png";
import arrowLeft from "../assets/images/arrow-left.png";

export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6 grid grid-cols-[1fr_auto_1fr] items-center">
      <div className="flex justify-start">
        <img
          src={roboImpactLogo}
          alt="roboimpact-logo"
          className="h-16 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Center: Menu */}
      <ul className="hidden md:flex items-center gap-12 font-plus-jakarta-sans font-semibold text-lg text-gray-700">
        {['About', 'Impact', 'How it Works'].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-[#399FD5] transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#399FD5] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      <div className="flex justify-end">
        <button
          className="
            group
            bg-[#399FD5]
            h-12
            pl-6 pr-1.5
            rounded-full
            flex items-center gap-4
            text-white font-plus-jakarta-sans font-semibold
            shadow-[0_10px_20px_-10px_rgba(57,159,213,0.5)]
            hover:shadow-[0_20px_25px_-5px_rgba(57,159,213,0.4)]
            hover:-translate-y-0.5
            active:scale-95
            transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          "
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Support Us
          </span>

          <span className="w-10 h-10 bg-white text-[#399FD5] rounded-full flex items-center justify-center shadow-sm group-hover:rotate-45 transition-transform duration-500 ease-out">
            <img src={arrowLeft} alt="arrow" className="h-3.5 w-auto" />
          </span>
        </button>
      </div>
    </nav>
  );
}
