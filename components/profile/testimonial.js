import Image from "next/image";
import { QuoteLeft } from "../icons";

// images
import { PlcHolderYellow } from "../images";

// {/* styles are coming through /components/centersection.js */}
// slider
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
// slider

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Responsive = {
  0: {
    items: 1.03,
    margin: 10,
  },
  768: {
    items: 2.03,
    margin: 10,
  },
  1024: {
    items: 3.03,
    margin: 15,
  },
  1280: {
    items: 3.1,
    margin: 20,
  },
  1536: {
    items: 3.05,
    margin: 20,
  },
};

export default function Testimonials({ profileDetails }) {
  return (
    <>
      <div
        id="MainTile5"
        className=" maintile5  container rounded-lg py-7 px-3  col-span-7 overflow-x-hidden"
      >
        <div className="main-tile4-content-wrap w-full h-full overflow-hidden">
          <div className="Testimonials-heading w-full h-[10%]">
            <h1 className="text-[#ff9d00] text-4xl">Testimonials</h1>
          </div>
          <div className="TestimonialsSlider  w-full lg:w-[47rem] xl:w-[65rem] 2xl:w-[77rem] ">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              responsive={Responsive}
              autoplay
              autoplayHoverPause
              autoplaySpeed={1500}
            >
              {profileDetails.testimonials.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="Testimonials-cards w-full rounded-xl py-10 px-8 lg:px-4 mx-1 relative overflow-hidden"
                  >
                    <div className="icons-name-wrap w-full flex justify-between">
                      <div className="w-[20%]">
                        <QuoteLeft className="text-[#ff9d00] text-3xl" />
                      </div>
                      <div className="w-[80%] justify-end text-end">
                        <span className="text-xl lg:text-lg xl:text-2xl w-full text-[#ff9d00] uppercase italic">
                          {data.StudentName}
                        </span>
                        <div className="w-full text-[#ff9d00] text-end text-xs italic uppercase ">
                          Class {data.StudentClass}
                        </div>
                      </div>
                    </div>
                    <div className="Testimonials-pharagraph-wrap ">
                      <p className="text-center w-full text-[#cec9c9] my-4 lg:my-8  text-[11px] lg:text-xs  xl:text-base  ">
                        {data.ForStudents}
                      </p>
                    </div>
                    <div className="Testimonials-images-wrap w-full bg-transparent flex justify-center items-center">
                      <div className="Testimonials-image bg-white rounded-full w-20 h-20 overflow-hidden ">
                        <Image
                          width={100}
                          height={100}
                          src={PlcHolderYellow}
                          alt="Testimonials"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
          <div className="owl-nav hidden md:flex ">
            {/* <div className="owl-prev "></div>
            <div className="owl-next "></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
