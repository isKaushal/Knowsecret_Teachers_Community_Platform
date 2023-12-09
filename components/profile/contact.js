import { EmailAnvlop, Telephone, Map } from "../icons";

export default function Contact({ profileDetails }) {
  return (
    <div
      id="MainTile6"
      className=" maintile6  container rounded-lg col-span-8 p-7 pr-1 lg:pr-7  absolute"
    >
      <div className="main-tile5-content-wrap overflow-y-scroll w-full h-full">
        <div>
          <div className="Education w-full h-14 pl-10">
            <h1
              id="GET-IN-TOUCH"
              className="text-[#ff9d00] lg:text-left text-4xl my-2"
            >
              Get In Touch
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="social-items w-full h-[25rem] py-6 col-span-1 grid grid-rows-3 justify-center items-center">
            <div className="user-email grid grid-cols-3 justify-center items-center">
              <div className="svg-wrap w-full justify-center items-center flex">
                <EmailAnvlop className="text-3xl text-[#ff9d00] " />
              </div>
              <div className="grid col-span-2 email-me">
                <h1 className="text-white text-2xl">Mail Me</h1>
                <small>{profileDetails.email}</small>
              </div>
            </div>
            <div className="user-phone grid grid-cols-3 justify-center items-center">
              <div className="svg-wrap w-full justify-center items-center flex">
                <Telephone className="text-3xl text-[#ff9d00]  " />
              </div>
              <div className="grid col-span-2 call-me">
                <h1 className="text-white text-2xl">Call Me</h1>
                <small>{profileDetails.contact}</small>
              </div>
            </div>
            <div className="user-address grid grid-cols-3 justify-center items-center">
              <div className="svg-wrap w-full justify-center items-center flex">
                <Map className="text-3xl text-[#ff9d00]  " />
              </div>
              <div className="grid col-span-2 my-address">
                <h1 className="text-white text-2xl">My Office</h1>
                <small>
                  {!profileDetails.office_address
                    ? "Basement, 27, opp. Cafe 99, near Jain ENT Hospital, Satya Vihar, Indra Puri, Vidhayak Nagar, Lalkothi, Jaipur, Rajasthan 302015"
                    : profileDetails.office_address}
                </small>
              </div>
            </div>
          </div>
          <form
            id="get-in-touch-form"
            className="items-center lg:mt-8 grid col-span-2"
          >
            <div className="name-wrap px-5 lg:px-20 w-[100%] justify-center items-center flex h-max">
              <input
                className="w-full outline-none bg-transparent border-b-2 border-[#4e4d4d] h-14 py-[1rem] text-white"
                autoComplete="off"
                placeholder="Name*"
                type="text"
                name="name"
                id="get-in-touch-name"
              />
            </div>
            <div className="name-wrap px-5 lg:px-20 w-[100%] justify-center items-center flex h-max">
              <input
                className="w-full outline-none bg-transparent border-b-2 border-[#4e4d4d] h-14 py-[1rem] text-white"
                autoComplete="off"
                placeholder="Email*"
                type="email"
                name="email"
                id="get-in-touch-email"
              />
            </div>
            <div className="name-wrap px-5 lg:px-20 w-[100%] justify-center items-center flex h-max">
              <input
                className="w-full outline-none bg-transparent border-b-2 border-[#4e4d4d] h-14 py-[1rem] text-white"
                autoComplete="off"
                placeholder="Phone No*"
                type="number"
                name="phone"
                id="get-in-touch-phone"
              />
            </div>
            <div className="name-wrap px-5 lg:px-20 w-[100%] justify-center items-center flex h-max">
              <textarea
                className="w-full outline-none text-white bg-transparent border-b-2 border-[#4e4d4d] h-40 py-[1rem]"
                style={{ resize: "none" }}
                name="massage"
                id="get-in-touch-query"
                placeholder="Massage*"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="button-wrap px-5 lg:px-20 flex items-center w-[100%] h-[6rem] outline-none ">
              <button
                type="submit"
                className="send text-[#ff9d00] text-xl border-2 border-[#ff9d00] px-14 py-2 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
