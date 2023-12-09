import Image from "next/image";

// imges
import { ExpIcon } from "../images";

export default function Experince({ profileDetails }) {
  profileDetails = profileDetails.experince.map((value, index) => {
    return {
      ...value,
      index: index,
    };
  });

  return (
    <div className=" maintile3 rounded-lg p-7 pr-2     ">
      <div className="education-wrap-outer w-full h-full overflow-x-hidden ">
        <div className="Education w-full h-10">
          <h1 className="text-[#ff9d00] uppercase flex  lg:text-left text-4xl my-2">
            <Image className="w-[40px] mr-2" src={ExpIcon} alt="" />
            Experience
          </h1>
        </div>
        <div className="relative">
          {/* slider here */}
          <div
            id="Experince-main"
            className=" grid grid-cols-1 lg:mt-14 w-full h-full "
          >
            <div className="Experince-main grid md:grid-cols-12 relative overflow-hidden  ">
              {profileDetails.map((data, index) => {
                return (
                  <div
                    className="table-rows col-span-12 md:col-span-6 md:px-[5rem] py-[1rem] md:py-[4rem] relative"
                    key={index}
                  >
                    <h1 className="text-[#ff9d00] text-lg">
                      {data.ExperinceYear}
                    </h1>
                    <h1 className="text-white lg:text-2xl">
                      {data.Organization}
                    </h1>
                    <h2 className="text-white lg:text-xl">
                      {data.Designation}
                    </h2>
                    <h3 className="text-white lg:text-xl">{data.Subject}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          {/* slider here */}
        </div>
      </div>
    </div>
  );
}
