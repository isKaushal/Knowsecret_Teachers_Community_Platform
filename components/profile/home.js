import Image from "next/image";
import { useRouter } from "next/router";
// import txt from "../../package.json";

// images
import { PlcHolderYellow, Laptop } from "../images";

export default function Home({ profileDetails }) {
  const router = useRouter();

  return (
    <div className=" bg-[#272727] h-full w-full grid py-14 lg:p-5 container rounded-lg items-center absolute lg:flex">
      <div className="MainTile1-image-wrap grid items-center lg:hidden lg:h-0">
        <div className="MainTile1-image-wrap-inner overflow-hidden w-full justify-center flex">
          <Image
            className="MainTile1-image rounded-full w-44 h-44"
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
      <div className="name-conatiner w-full lg:px-0 justify-between items-center h-40 lg:h-[60%] lg:flex h-initial">
        <div className=" ">
          <h2 className="WEB-DESIGNER text-center text-white  lg:text-left uppercase">
            {profileDetails.faculty}
          </h2>
          <h1 className="name-inner text-white text-center lg:text-left text-xl md:text-2xl">
            Hello, I’m
            <span className="main-name text-xl md:text-2xl xl:text-3xl text-[#ff9d00] ">
              {" "}
              {profileDetails.user_name}
            </span>
          </h1>
          <h1 className="welcome-text text-white text-center text-xl lg:text-left md:text-2xl">
            Welcome to my World.
          </h1>
          <div
            id="DownloadCV-button-wrap"
            className="w-full lg:hidden grid justify-center items-center overflow-hidden"
          >
            <button
              onClick={() => router.push(`/${router.query.profileid}/cv`)}
              id="navigation-button"
              className="button rounded-full w-44 h-14 text-white my-14  text-xl bg-[#ff9d00]"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="image">
          <Image
            className="name-side-image hidden lg:block lg:w-[13rem] xl:w-[16rem] 2xl:w-[20rem]  "
            priority
            src={Laptop}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
