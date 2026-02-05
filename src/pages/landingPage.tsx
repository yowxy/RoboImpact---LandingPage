import arrowLeft from "../assets/images/arrow-left.png";
import aiImages from "../assets/images/test.png";
export default function LandingPage() {
  return (
    <div className="mt-44">
      <h1 className="font-plus-jakarta-sans text-6xl font-semibold text-center leading-tight">
        Bringing Future Technology to the <br />
        Most Forgotten Classrooms
      </h1>

      <p className="font-plus-jakarta-sans text-xl text-center mt-6 max-w-3xl mx-auto">
        From remote rural areas (3T) to global innovation we help students build
        robots, explore artificial intelligence (AI), and believe in their
        future.
      </p>

      <div className="flex justify-center mt-10">
        <button
          className="
            bg-[#399FD5]
            h-[62px]
            px-8
            rounded-full
            flex items-center gap-6
            text-white font-plus-jakarta-sans text-xl font-semibold
            hover:scale-105 transition
            cursor-pointer
          "
        >
          Get Started
          <span className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
            <img src={arrowLeft} alt="arrow" className="h-4 w-auto" />
          </span>
        </button>
      </div>
      <div>
        <div className="flex justify-center mt-56  font-poppins flex-col items-center">
            <div className="bg-white border-[#399FD5] border-2 w-[320px] h-[32px] rounded-xl flex items-center">
                <div className="flex flex-row gap-3.5 items-center justify-start pl-4">
                <img src={aiImages} alt="AI Images" className="w-[20px] h-[20px] object-contain" />
                <p>unlock your potential with us!</p>
                </div>
            </div>
            <h1 className="text-5xl font-semibold mt-4">What we Do?</h1>
            <p className="text-xl mt-4">We Bring the Future to Them  Not the Other Way Around</p>
            <div className="mt-20 flex flex-row gap-10">
                <div className="bg-[#399FD5]  w-[333px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5">
                    <h1 className="font-bold text-2xl text-white">Robotics Education</h1>
                    <p className="text-white text-[12px] mt-2">
                        Students learn by building real robots from <br/>
                         the ground up — understanding mechanics, <br/>
                          electronics, and logic through hands-on <br/>
                          experience, not just theory.
                    </p>
                </div>
                <div className="bg-[#399FD5]  w-[400px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5">
                    <h1 className="font-bold text-2xl text-white"> AI & Computational Thinking</h1>
                    <p className="text-white text-[12px] mt-2">
                       We introduce students to how machines think, <br/>
                        decide, and solve problems, helping them <br/>
                         develop logical thinking and future-ready <br/>
                         problem-solving skills.
                    </p>
                </div>
                <div className="bg-[#399FD5]  w-[373px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5">
                    <h1 className="font-bold text-2xl text-white">Community-Based Learning</h1>
                    <p className="text-white text-[12px] mt-2">
                        We work closely with local communities to <br/>
                        create sustainable learning environments, <br/>
                        ensuring education continues long after the <br/>
                        workshop ends.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
