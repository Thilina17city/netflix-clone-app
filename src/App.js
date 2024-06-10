import { useState } from "react";
import heroImage from "./Assets/hero.jpg";
import tvImage from "./Assets/tv.png";
import mobileImage from "./Assets/mobile.jpg";
import boxImage from "./Assets/boxshot.png";
import DownloadImage from "./Assets/download.gif";
import KidsImage from "./Assets/kids.png";

///Hero section
const Hero = () => {
  return (
    <div className="md:h-[90vh] h-[70vh] relative ">
      <img src={heroImage} alt="" className="object-cover w-full h-full" />
      {/* overLay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90">
        <NaveBar />
        <Maintext />
      </div>
    </div>
  );
};

//sectionOne
const SectionOne = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between max-w-[1100px] gap-3 mx-auto items-center mb-1">
      <div className="md:w-[52%] w-full text-center md:text-left pt-20 px-10 md:items-center md:p-5 ">
        <h1 className="pb-3 title">Enjoy on your TV</h1>
        <p className="subtitle">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="relative md:w-[48%] w-full">
        <img src={tvImage} alt="" className="w-full h-full" />
        <video
          className="absolute top-[48%] max-h-[54%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          data-uia="nmhp-card-animation-asset-video"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

//sectionTwo

const SectionTwo = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between max-w-[1100px] gap-3 md:mx-auto items-center  pb-[30px] mt-5">
      <div className="relative md:w-[48%] w-full">
        <img src={mobileImage} alt="" className="w-full h-full" />
        <div
          className="flex items-center md:w-[60%] w-[70%] border-gray-700 border-2 justify-between gap-3 py-[0.5rem] px-[0.75rem] rounded-xl absolute left-[50%]
         bottom-[4%]
        -translate-x-1/2 bg-black/90"
        >
          <img src={boxImage} alt="" className="md:h-[4.5rem] h-[3rem]" />
          <div className="flex justify-between gap-10">
            <div className="text-left ">
              <div className="text-white md:text-base text-[0.9rem]">Stranger Thing</div>
              <div className="md:text-base text-[#0071eb] text-[0.7rem]">Downloading...</div>
            </div>
            <img src={DownloadImage} alt="" className="md:h-[3rem] md:w-[3rem] h-[2rem] " />
          </div>
        </div>
      </div>
      <div className="md:w-[52%] w-full text-center md:mr-24">
        <h1 className="pb-3 text-center title">Download your shows to watch offline</h1>
        <p className="subtitle">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

//sectionThree

const SectionThree = () => {
  return (
    <div className="flex justify-between md:max-w-[1100px]  gap-3 mx-auto items-center py-[70px] md:flex-row flex-col my-5">
      <div className="md:w-[52%] w-full flex flex-col items-center">
        <h1 className="pb-3 title">Watch everywhere</h1>
        <p className="p-4 text-center subtitle" >
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="relative w-[48%]">
        <div className="w-full h-full"></div>
        <div className="absolute top-[48%] max-h-[54%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

//sectionFour

const SectionFour = () => {
  return (
    <div className="flex justify-between max-w-[1100px] md:gap-3 gap-0 mx-auto items-center pb-[30px] md:flex-row flex-col-reverse">
      <div className="relative w-[48%] md:gap-3  md:pt-[80px] pt-[40px]">
        <img src={KidsImage} alt="" className="w-full h-full" />
      </div>
      <div className="w-[52%]">
        <h1 className="pt-4 pb-3 title">Create profiles for kids</h1>
        <p className="subtitle">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

//sectionFAQ

const FAQ = (props) => {
  return (
    <div className="">
      <div>
        <ul className="w-[75%] mx-auto">
          <li className="list-item">
            <div className="list-item-title">{props.FAQ}</div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="list-item-icon"
              data-name="Plus"
              alt=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

//sectionFAQ

const SectionFAQ = () => {
  const [text, settext] = useState("");
  return (
    <div className="mb-7">
      <h1 className="w-full mb-6 text-center title max-w-[1100px] mx-auto md:py-[70px] px-[30px] pt-3">
        Frequently Asked Questions
      </h1>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What is Netflix?" />
      </div>
      <div>
        <div className="pb-1 text-xl text-center text-white pt-7">
          Ready to watch? Enter your email to create or restart your membership
        </div>
        <div className="flex flex-col w-full gap-2 md:justify-center md:flex-row md:items-stretch ">
        <input
          className="md:w-[60%] w-100 px-[10px] py-2 md:py-4 bg-white placeholder:text-sm mx-3"
          type="text"
          value={text}
          placeholder="search"
          onChange={(e) => {
            settext(e.target.value);
          }}
        ></input>
        <button className=" red-button">
          <span className="flex items-center">
            Get Started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-mirrorinrtl="true"
              className="text-white fill-current h-11 "
              data-name="ChevronRight"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      </div>
    </div>
  );
};

//NaveBar

const NaveBar = () => {
  return (
    <div>
      <div className="flex items-center mx-2 md:mx-0 justify-between md:w-full px-[5x] md:px-[58px] pt-[28px]">
        <svg
          viewBox="0 0 111 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="text-[#e50914] fill-current h-[27px] md:h-[36px]"
        >
          <g>
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 
            L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,0 L99.5313525,
            0 L102.593495,7.87421502 L105.874965,0 L110.999156,0 L105.06233,14.2806261 Z M90.4686475,0 L85.8749649,0 L85.8749649,27.2499766 C87.3746368,
            27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,0 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,
            26.4064111 69.250164,26.3117443 L69.250164,0 L73.9366389,0 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,
            22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,
            25.9996251 L53.2186709,0 L66.3436123,0 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,
            10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,
            4.68741213 L35.8121661,4.68741213 L35.8121661,0 L50.2183897,0 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 
            C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,
            22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,0 L32.7809542,0 L32.7809542,4.68741213 L24.4999531,4.68741213
             L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 
             L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,0 L4.4690224,0 L10.562377,17.0315868 L10.562377,0 L15.2497891,
             0 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
            ></path>
          </g>
        </svg>
        <button
          type="button"
          className="bg-[#e50914] px-[0.5rem] py-[0.25rem] md:px-[17px] md:py-[7px] rounded-[3px] text-white text-[0.9rem] hover:bg-red-950"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

//Main text

const Maintext = () => {
  const [text, settext] = useState("");

  return (
    <div className="relative flex flex-col justify-center w-[85%] max-w-[800px] h-full items-center mx-auto gap-5 text-center px-5">
      <h1 className="max-w-screen-sm text-white title">
        Unlimited Movies ,TV shows and More
      </h1>
      <p className="text-white subtitle">Watch anywhere,Cancel anytime.</p>
      <p className="text-white text-[18px] md:text-[1.2rem] font-light">
        Ready to watch? Enter Your email to create or restart your Membership
      </p>

      {/* search component */}
      <div className="flex flex-col w-full gap-2 md:justify-center md:flex-row md:items-stretch ">
        <input
          className="md:w-[60%] w-full px-[10px] py-2 md:py-4 bg-white placeholder:text-sm"
          type="text"
          value={text}
          placeholder="search"
          onChange={(e) => {
            settext(e.target.value);
          }}
        ></input>
        <button className=" red-button">
          <span className="flex items-center">
            Get Started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-mirrorinrtl="true"
              className="text-white fill-current h-11 "
              data-name="ChevronRight"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

//Footer

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1000px] text-[#737373] py-[70px] px-[45px] w-[90%] ">
        <h2 className="mb-4">AnyQuestions? Contact us</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 text-[13px]">
          <div>
            <div className="footer-item">FAQ</div>
            <div className="footer-item">Investor Relations</div>
            <div className="footer-item">Privacy</div>
            <div className="footer-item">Speed Test</div>
          </div>
          <div>
            <div className="footer-item">Help Center</div>
            <div className="footer-item">Jobs</div>
            <div className="footer-item">Cookie Preferences</div>
            <div className="footer-item">Legal Notices</div>
          </div>
          <div>
            <div className="footer-item">Account</div>
            <div className="footer-item">Account</div>
            <div className="footer-item">Corporate Information</div>
            <div className="footer-item">Only on Netflix</div>
          </div>
          <div>
            <div className="footer-item">Media Center</div>
            <div className="footer-item">Terms of Use</div>
            <div className="footer-item">Contact Us</div>
            <div></div>
          </div>
        </div>
        <div>Netflix Sri Lanka</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <div>
        <Hero />
      </div>
      <div className="bg-black gray-border">
        <SectionOne />
      </div>
      <div className="bg-black gray-border">
        <SectionTwo />
      </div>
      <div className="bg-black gray-border">
        <SectionThree />
      </div>
      <div className="bg-black gray-border">
        <SectionFour />
      </div>
      <div className="bg-black gray-border">
        <SectionFAQ />
      </div>
      <div className="bg-black gray-border">
        <Footer />
      </div>
    </div>
  );
}

export default App;
