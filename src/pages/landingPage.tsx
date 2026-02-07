import arrowLeft from "../assets/images/arrow-left.png";
import aiImages from "../assets/images/test.png";
import communicationIcon from "../assets/images/communication.png";
import runningIcon from "../assets/images/running.png";
import growIcon from "../assets/images/grow.png";
import checklistIcon from "../assets/images/checklist.png";
import bgImpact from "../assets/images/bg-impact.png";
// import { useEffect } from "react";
export default function LandingPage() {



  return (
    <div className="mt-44">
      <h1 className="font-plus-jakarta-sans text-6xl font-semibold text-center leading-tight" data-aos="fade-up" >
        Bringing Future Technology to the <br />
        Most Forgotten Classrooms
      </h1>

      <p className="font-plus-jakarta-sans text-xl text-center mt-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        From remote rural areas (3T) to global innovation we help students build
        robots, explore artificial intelligence (AI), and believe in their
        future.
      </p>

      <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="400">
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
          <div className="bg-white border-[#399FD5] border-2 w-[320px] h-[32px] rounded-xl flex items-center" data-aos="fade-up" data-aos-delay="700">
            <div className="flex flex-row gap-3.5 items-center justify-start pl-4">
              <img
                src={aiImages}
                alt="AI Images"
                className="w-[20px] h-[20px] object-contain"
              />
              <p>unlock your potential with us!</p>
            </div>
          </div>
          <h1 className="text-5xl font-semibold mt-4" data-aos="fade-up" data-aos-delay="700">What we Do?</h1>
          <p className="text-xl mt-4" data-aos="fade-up" data-aos-delay="800">
            We Bring the Future to Them Not the Other Way Around
          </p>
          <div className="mt-20 flex flex-row gap-10">
            <div className="bg-[#399FD5]  w-[333px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5" data-aos="fade-up" data-aos-delay="100">
              <h1 className="font-bold text-2xl text-white">
                Robotics Education
              </h1>
              <p className="text-white text-[12px] mt-2">
                Students learn by building real robots from <br />
                the ground up — understanding mechanics, <br />
                electronics, and logic through hands-on <br />
                experience, not just theory.
              </p>
            </div>
            <div className="bg-[#399FD5]  w-[400px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5" data-aos="fade-up" data-aos-delay="300">
              <h1 className="font-bold text-2xl text-white">
                {" "}
                AI & Computational Thinking
              </h1>
              <p className="text-white text-[12px] mt-2">
                We introduce students to how machines think, <br />
                decide, and solve problems, helping them <br />
                develop logical thinking and future-ready <br />
                problem-solving skills.
              </p>
            </div>
            <div className="bg-[#399FD5]  w-[373px] h-[287px] rounded-3xl font-plus-jakarta-sans p-5" data-aos="fade-up" data-aos-delay="500">
              <h1 className="font-bold text-2xl text-white">
                Community-Based Learning
              </h1>
              <p className="text-white text-[12px] mt-2">
                We work closely with local communities to <br />
                create sustainable learning environments, <br />
                ensuring education continues long after the <br />
                workshop ends.
              </p>
            </div>
          </div>
        </div>

        <div className="flex m-24  font-poppins mt-36 flex-col ">
          <div className="bg-white border-[#399FD5] border-2 w-[320px] h-[32px] rounded-xl flex items-center" data-aos="fade-up" data-aos-delay="700">
            <div className="flex flex-row gap-3.5 items-center justify-start pl-4">
              <img
                src={aiImages}
                alt="AI Images"
                className="w-[20px] h-[20px] object-contain"
              />
              <p>unlock your potential with us!</p>
            </div>
          </div>
          <h1 className="font-semibold text-5xl mt-5" data-aos="fade-up" data-aos-delay="800">
            The Beginning of RoboImpact
          </h1>
          <p className="font-light mt-4" data-aos="fade-up" data-aos-delay="850">
            Founded on January 29, 2026, RoboImpact is a community-driven
            initiative bringing robotics and AI education to students in <br />
            Indonesia’s 3T areas. We work with schools and local communities to
            help students explore technology, build confidence, <br />
            and see new possibilities for their future.
          </p>
          <p className="font-light mt-4" data-aos="fade-up" data-aos-delay="850">
            We work with schools and local communities to help <br />
            students explore technology, build confidence, and <br />
            see new possibilities for their future.
          </p>
        </div>

        <div className="flex justify-center mt-72  font-poppins flex-col items-center">
          <div className="bg-white border-[#399FD5] border-2 w-[180px] h-[32px] rounded-xl flex items-center" data-aos="fade-up" data-aos-delay="850">
            <div className="flex flex-row gap-3.5 items-center justify-start pl-4">
              <img
                src={aiImages}
                alt="AI Images"
                className="w-[20px] h-[20px] object-contain"
              />
              <p>How it works</p>
            </div>
          </div>

          <h1 className="text-5xl font-semibold mt-4" data-aos="fade-up" data-aos-delay="850">How RoboImpact Works</h1>
          <p className="font-light text-[16px] mt-1" data-aos="fade-up" data-aos-delay="1000">
            We start small, work together, and grow impact step by step.
          </p>

          <div className="mt-10 font-poppins">
            <div className="flex flex-row gap-56">
              <div className="flex flex-row gap-6 items-center">
                <div className="bg-[#399FD5] w-16 h-16 rounded-2xl" data-aos="fade-up" data-aos-delay="850">
                  <img
                    src={communicationIcon}
                    alt="Communication Icon"
                    className="w-[70px] h-[70px] object-contain p-3"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-light" data-aos="fade-up" data-aos-delay="800">Step 01</h1>
                  <h1 className="font-semibold text-4xl"  data-aos="fade-up" data-aos-delay="800">
                    We Go to the Communities
                  </h1>
                  <p className="mt-2" data-aos="fade-up" data-aos-delay="800">
                    We work directly with schools in Indonesia’s 3T areas to{" "}
                    <br />
                    understand real challenges and local learning conditions.{" "}
                    <br />
                  </p>

                  <span className="mt-3" data-aos="fade-up" data-aos-delay="800">
                    -Partner with local schools and educators <br />
                    -Assess student needs and available resources <br />
                    -Design programs based on real contexts, not assumptions{" "}
                    <br />
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-6 items-center">
                <div className="bg-[#399FD5] w-16 h-16 rounded-2xl" data-aos="fade-up" data-aos-delay="800">
                  <img
                    src={runningIcon}
                    alt="Communication Icon"
                    className="w-[70px] h-[70px] object-contain p-3"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-light" data-aos="fade-up" data-aos-delay="800">Step 02</h1>
                  <h1 className="font-semibold text-4xl"  data-aos="fade-up" data-aos-delay="800">We Learn by Doing</h1>
                  <p className="mt-2"  data-aos="fade-up" data-aos-delay="800">
                    We work directly with schools in Indonesia’s 3T areas to{" "}
                    <br />
                    understand real challenges and local learning conditions.{" "}
                    <br />
                  </p>

                  <span className="mt-3"  data-aos="fade-up" data-aos-delay="800">
                    -Partner with local schools and educators <br />
                    -Assess student needs and available resources <br />
                    -Design programs based on real contexts, not assumptions{" "}
                    <br />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-56  mt-46">
              <div className="flex flex-row gap-6 items-center">
                <div className="bg-[#399FD5] w-16 h-16 rounded-2xl"  data-aos="fade-up" data-aos-delay="800">
                  <img
                    src={growIcon}
                    alt="Communication Icon"
                    className="w-[70px] h-[70px] object-contain p-3"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-light"  data-aos="fade-up" data-aos-delay="800">Step 03</h1>
                  <h1 className="font-semibold text-4xl"  data-aos="fade-up" data-aos-delay="800">We Grow Together</h1>
                  <p className="mt-2"  data-aos="fade-up" data-aos-delay="800">
                    We work directly with schools in Indonesia’s 3T areas to{" "}
                    <br />
                    understand real challenges and local learning conditions.{" "}
                    <br />
                  </p>

                  <span className="mt-3"  data-aos="fade-up" data-aos-delay="800">
                    -Partner with local schools and educators <br />
                    -Assess student needs and available resources <br />
                    -Design programs based on real contexts, not assumptions{" "}
                    <br />
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-6 items-center">
                <div className="bg-[#399FD5] w-16 h-16 rounded-2xl"  data-aos="fade-up" data-aos-delay="800">
                  <img
                    src={growIcon}
                    alt="Communication Icon"
                    className="w-[70px] h-[70px] object-contain p-3"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-light"  data-aos="fade-up" data-aos-delay="800">Step 04</h1>
                  <h1 className="font-semibold text-4xl"  data-aos="fade-up" data-aos-delay="800">We Keep It Going</h1>
                  <p className="mt-2"  data-aos="fade-up" data-aos-delay="800">
                    We work directly with schools in Indonesia’s 3T areas to{" "}
                    <br />
                    understand real challenges and local learning conditions.{" "}
                    <br />
                  </p>

                  <span className="mt-3"  data-aos="fade-up" data-aos-delay="800">
                    -Partner with local schools and educators <br />
                    -Assess student needs and available resources <br />
                    -Design programs based on real contexts, not assumptions{" "}
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-poppins ml-24 mt-80">
          <div className="bg-white border-[#399FD5] border-2 w-[200px] h-[32px] rounded-xl flex items-center"  data-aos="fade-up" data-aos-delay="800">
            <div className="flex flex-row gap-3.5 items-center justify-start pl-4">
              <img
                src={aiImages}
                alt="AI Images"
                className="w-[20px] h-[20px] object-contain"
              />
              <p className="font-semibold">Impact in Action</p>
            </div>
          </div>
          <div className="mt-1.5">
            <div className="flex flex-row gap-80">
              <div className="flex flex-col">
                <h1 className="font-semibold text-4xl"  data-aos="fade-up" data-aos-delay="1000">
                  Real Impact, Built with Communities
                </h1>
                <p className="font-light text-xl mt-1.5" data-aos="fade-up" data-aos-delay="1050">
                  RoboImpact focuses on creating meaningful learning experiences
                  by <br />
                  working directly with schools and local communities in
                  Indonesia’s 3T <br />
                  areas. Our impact is built through hands-on programs, local{" "}
                  <br />
                  collaboration, and long-term commitment.
                </p>
                <div className="flex flex-col">
                  <div className="mt-10 flex flex-row">
                    <div className="bg-[#399FD5] w-7 h-7 rounded-2xl p-1.5 flex justify-center" data-aos="fade-up" data-aos-delay="1050">
                      <img
                        src={checklistIcon}
                        alt="checklistIcon"
                        className="w-[26px] h-[20px] object-contain"
                      />
                    </div>
                    <h1 className="font-semibold text-2xl ml-4" data-aos="fade-up" data-aos-delay="1050">
                      Hands on robotics & AI learning
                    </h1>
                  </div>
                  <div className="flex flex-row mt-4">
                    <div className="bg-[#399FD5] w-7 h-7 rounded-2xl p-1.5 flex justify-center" data-aos="fade-up" data-aos-delay="1050">
                      <img
                        src={checklistIcon}
                        alt="checklistIcon"
                        className="w-[26px] h-[20px] object-contain"
                      />
                    </div>
                    <h1 className="font-semibold text-2xl ml-4" data-aos="fade-up" data-aos-delay="1050">
                      Community and teacher involvement
                    </h1>
                  </div>
                  <div className="flex flex-row mt-4">
                    <div className="bg-[#399FD5] w-7 h-7 rounded-2xl p-1.5 flex justify-center" data-aos="fade-up" data-aos-delay="1100">
                      <img
                        src={checklistIcon}
                        alt="checklistIcon"
                        className="w-[26px] h-[20px] object-contain"
                      />
                    </div>
                    <h1 className="font-semibold text-2xl ml-4" data-aos="fade-up" data-aos-delay="1100">
                      Programs designed for sustainability
                    </h1>
                  </div>
                  <div className="flex flex-row mt-4">
                    <div className="bg-[#399FD5] w-7 h-7 rounded-2xl p-1.5 flex justify-center" data-aos="fade-up" data-aos-delay="1100">
                      <img
                        src={checklistIcon}
                        alt="checklistIcon"
                        className="w-[26px] h-[20px] object-contain"
                      />
                    </div>
                    <h1 className="font-semibold text-2xl ml-4" data-aos="fade-up" data-aos-delay="1100">
                      Learning beyond one-time events
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={bgImpact}
                  alt="background impact"
                  className="w-175 h-100"
                  data-aos="fade-up" data-aos-delay="1100"
                />
              </div>
            </div>
            <div className="flex justify-center mt-96">
              <div className="w-[1350px] h-[359px] rounded-4xl bg-[#399FD5]" data-aos="fade-up" data-aos-delay="1100">
                <div className="flex justify-center items-center p-10 flex-col mt-9">
                  <h1 className="font-semibold text-4xl text-white text-center pt-10" data-aos="fade-up" data-aos-delay="1130">
                    Unlock New Potential With <br />
                    RoboImpact
                  </h1>
                  <div className="flex justify-end mt-3">
                    <button
                      className="
            group
            bg-[#285A93]
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
            cursor-pointer
          "
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Join Us
                      </span>

                      <span className="w-10 h-10 bg-white text-[#399FD5] rounded-full flex items-center justify-center shadow-sm group-hover:rotate-45 transition-transform duration-500 ease-out">
                        <img
                          src={arrowLeft}
                          alt="arrow"
                          className="h-3.5 w-auto"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
