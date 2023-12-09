import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// components
import StarRating from "../starrating";

// slider
import Slider from "../../components/MyCustomeSlider";

// icons
import { Music, Plane, MoviePlay, BookMark, Football } from "../icons";

// images
import { PlcHolderYellow } from "../images";

export default function About({ profileDetails }) {
  const router = useRouter();
  return (
    <div className="  bg-[#272727] h-full w-full   rounded-lg p-7 pr-4 col-span-7 overflow-hidden absolute">
      <div className="main-tile2-content-wrap w-full h-full  overflow-y-scroll">
        <div className=" grid lg:flex">
          <div className=" w-full lg:w-2/5 col-span-1 lg:h-5/6 grid justify-center items-center">
            <div
              className={` ${
                profileDetails.user_image ? "border-2 border-[#ff9d00]" : null
              }  w-44 lg:w-56 xl:w-64  rounded-t-3xl rounded-bl-3xl lg:mt-32`}
            >
              <Image
                style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}
                className="second-image lg:w-96 rounded-t-3xl rounded-bl-3xl"
                src={
                  profileDetails.user_image
                    ? profileDetails.user_image
                    : PlcHolderYellow
                }
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className=" w-full col-span-1 lg:w-3/5 lg:h-5/6 py-14">
            <h1 className="text-white text-4xl text-[25px]">
              A short story about me , my mission,
              <br />
              thinking and craft.
            </h1>
            <p className="text-white text-md my-5 pr-14  ">
              I’m a web designer who aware of the tiny moments in a persons life
              that reveal greater truths. Aliquam erat volutpat. Nullam
              imperdiet sapien felis, non lobortis odio mattis in. Quisque
              dapibus aliquet dictum. Integer dapibus ullamcorper est, ac .
            </p>
            <div className="grid lg:grid-cols-2 text-white">
              <ul className="list-item lg:col-span-1 ">
                <li>
                  Date Of Birth:- <small>{profileDetails.dob} </small>
                </li>
                <li>
                  Address:- <small>{profileDetails.address} </small>
                </li>
                <li>
                  Pin code:- <small>{profileDetails.pincode} </small>
                </li>
              </ul>
              <ul className="list-item lg:col-span-1 ">
                <li>
                  Email Id:- <small>{profileDetails.email}</small>
                </li>
                <li>
                  Contact No:- <small>{profileDetails.contact}</small>
                </li>
              </ul>
            </div>

            <Link href={`/${router.query.profileid}/profile/contact`}>
              <button
                id="GET-HIRED"
                className="button px-8 py-3 rounded-full my-5 text-white bg-[#ff9d00] text-xl"
              >
                Get Hired
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative">
          <div className="hobbies-wrap w-full lg:h-36 grid grid-cols-2  lg:flex justify-evenly">
            {profileDetails.hobbies.Music === true ? (
              <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
                <div className="flex justify-center items-center text-[#ff9d00]">
                  <Music className="scale-[1.3]" />
                </div>
                <h1 className="text-white text-xl">Music</h1>
              </div>
            ) : null}

            {profileDetails.hobbies.Travel === true ? (
              <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
                <div className="flex justify-center items-center text-[#ff9d00]">
                  <Plane className="scale-[1.3]" />
                </div>
                <h1 className="text-white text-xl">Travel</h1>
              </div>
            ) : null}

            {profileDetails.hobbies.Movie === true ? (
              <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
                <div className="flex justify-center items-center text-[#ff9d00]">
                  <MoviePlay className="scale-[1.3]" />
                </div>
                <h1 className="text-white text-xl">Movie</h1>
              </div>
            ) : null}

            {profileDetails.hobbies.Sports === true ? (
              <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
                <div className="flex justify-center items-center text-[#ff9d00]">
                  <Football className="scale-[1.3]" />
                </div>
                <h1 className="text-white text-xl">Sports</h1>
              </div>
            ) : null}

            {profileDetails.hobbies.Reading === true ? (
              <div className="hobbies w-full h-36 grid col-span-2 lg:col-span-1 justify-center items-center py-6">
                <div className="flex justify-center items-center text-[#ff9d00]">
                  <BookMark className="scale-[1.3]" />
                </div>
                <h1 className="text-white text-xl">Rading</h1>
              </div>
            ) : null}
          </div>
        </div>
        <div className="skills w-full">
          <div className="w-full py-10 px-3">
            <h1 className="text-white text-4xl lg:text-3xl pb-6">
              I have been able to experience & developing this type of skill.
            </h1>
            <div className="grid grid-cols-12  gap-y-4">
              {profileDetails.skills.map((value) => {
                return (
                  <StarRating
                    key={value.id}
                    className="md:col-span-6 col-span-12"
                    list={value}
                    color="white"
                    size="22"
                    textTransform="uppercase"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative py-10">
          <Slider list={profileDetails.awards} />
        </div>
      </div>
    </div>
  );
}
