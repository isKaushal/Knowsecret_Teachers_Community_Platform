export default function NotFound() {
  return (
    <div className=" bg-[#272727] h-full w-full grid py-14 lg:p-5 container rounded-lg items-center absolute lg:flex">
      <div className="text-center w-full font-[Segoe UI , Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji] lg:font-[cursive] ">
        <h1 className="text-[10rem]  lg:text-[15rem] text-[#ff9d00] leading-[15rem] ">
          404
        </h1>
        <h5 className="text-lg  text-white capitalize tracking-[1px]  ">
          this page is currently unavailable{" "}
        </h5>
      </div>
    </div>
  );
}
