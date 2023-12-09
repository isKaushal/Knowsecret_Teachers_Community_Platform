import { AcademicCap } from "../icons";

export default function Education({ profileDetails }) {
  return (
    <div
      id="MainTile3"
      className="maintile3  rounded-lg p-7 absolute flex justify-center items-center"
    >
      <div className=" h-full w-full">
        <div className="w-full h-10 uppercase flex ">
          <AcademicCap className="text-white text-[40px] mr-2 mt-1  " />
          <h1 className="text-[#ff9d00] lg:text-left text-4xl">Education</h1>
        </div>
        <div className="relative">
          <div
            id="Education-main"
            className=" Education-main grid lg:grid-cols-1 md:mt-14 w-full lg:h-full"
          >
            <div className="education-wrap w-full grid grid-cols-12 relative">
              {profileDetails.education.map((value, index) => {
                return (
                  <div
                    className="col-span-12 md:col-span-6 py-[1rem] md:px-[5rem] md:py-[4rem]"
                    key={index}
                  >
                    <h1 className="text-[#ff9d00] text-lg">
                      {value.EducationYear}
                    </h1>
                    <h1 className="text-white lg:text-2xl">{value.Board}</h1>
                    <h1 className="text-white lg:text-2xl">{value.Degree}</h1>
                    <h1 className="text-white lg:text-2xl">{value.Result}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
