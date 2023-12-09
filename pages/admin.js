import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

// icons
import { Cross, NavDots } from "../components/icons";

// images
import Logo from "../public/images/profilepage/logo.png";
import { PlcHolderYellow as PlcHolder } from "../components/images";

const MainStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400&family=Teko:wght@300&display=swap");
  font-family: "Rubik", sans-serif;
`;

const TransitionDiv = styled.span`
  transition: 0.3s all;
`;

const Sidebar = styled.div`
  transition: 0.3s all;
  position: relative;
  width: ${(props) => (props.Expend === true ? "25%" : 0)};
  padding: ${(props) => (props.Expend === true ? "1rem" : 0)};

  .demo {
    cursor: pointer;
    overflow: hidden;
    font-size: 25px;
    color: white;
    position: absolute;
    top: 35%;
    left: 100%;
    width: 15px;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: #272727;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .pageTrack {
    position: relative;
    ::before {
      transition: 0.2s all;
      content: "";
      width: 100%;
      height: 50%;
      left: ${(props) => (props.Expend === true ? "1rem" : 0)};
      top: ${(props) => props.position};
      background-color: #ff9d00;
      position: absolute;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;

function AdminLogoBar({ setSearchValue }) {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState(false);
  useEffect(() => setSearchValue(search));

  return (
    <div className=" h-[10%] p-4 flex justify-between  bg-[#272727] ">
      <Image src={Logo} alt="" className="col-span-3" />
      <div className="col-span-8 flex justify-end items-center  ">
        <input
          type="text"
          value={search}
          placeholder="Search. . ."
          autoComplete="off"
          name="Search"
          onChange={(event) => setSearch(event.target.value)}
          className="h-[2.5rem] p-4 my-auto bg-black rounded-full outline-none text-white transition-all w-44 hover:w-56 focus:w-56"
        />
      </div>
      {/* <div className="relative col-span-1 w-full h-full flex justify-end items-center text-white text-2xl ">
        <NavDots
          className="cursor-pointer"
          onClick={() => setSearchBy(!searchBy)}
        />
      </div> */}
    </div>
  );
}

const AdminSidebar = ({ expend, setExpend }) => {
  const [position, setposition] = useState("0%");
  const CheckPosition = ({ position, children, className }) => {
    const onClick = () => {
      setposition(position);
    };
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  };

  return (
    <Sidebar Expend={expend} position={position} className="bg-[#272727] ">
      <div onClick={() => setExpend(true)} className="demo">
        &#8250;
      </div>
      <div className="w-full my-4  flex justify-end text-white text-2xl  ">
        <Cross className="cursor-pointer" onClick={() => setExpend(false)} />
      </div>
      <div className="pageTrack w-full  ">
        <CheckPosition
          className=" overflow-hidden z-[10] relative w-full h-full cursor-pointer  "
          position="0%"
        >
          <h1 className="text-xl my-4  text-center  text-white  ">PROFILES</h1>
        </CheckPosition>
        <CheckPosition
          className=" overflow-hidden z-[10] relative w-full h-full cursor-pointer  "
          position="50%"
        >
          <h1 className="text-xl my-4  text-center  text-white  ">QUERY</h1>
        </CheckPosition>
      </div>
      <div
        className={`w-full flex justify-end ${
          expend ? "px-6 opacity-1" : "opacity-0"
        } transition-all  absolute left-0 top-[90%] overflow-hidden  `}
      >
        <button
          onClick={() => signOut({ redirect: "/" })}
          className={`transition-all py-2  px-8 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem]  hover:bg-[#ff9d00] hover:text-white `}
        >
          Sign Out
        </button>
      </div>
    </Sidebar>
  );
};

const ProfilsSection = ({ expend, Data, searchValue }) => {
  async function ActivateProfile(status, handle) {
    let statusData;

    if (status === "Deactive") {
      statusData = "Active";
    }

    if (status === "Active") {
      statusData = "Deactive";
    }

    const updatedate = {
      user_handle: handle,
      profile_status: statusData,
    };

    const Bodyjson = JSON.stringify(updatedate);
    try {
      const resp = await fetch(`http://localhost:3000/api/profile_update`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: Bodyjson,
      });
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TransitionDiv
      className={`w-[100%] bg-transparient p-4 overflow-x-hidden `}
    >
      <div className={` grid grid-cols-12 transition-all  `}>
        {Data.filter((value) => {
          return (
            value &&
            value.user_name.toLowerCase().includes(searchValue?.toLowerCase())
          );
        }).map((value, index) => {
          return (
            <div
              key={index}
              className={
                expend
                  ? "m-1.5 p-4 rounded-md bg-[#272727] col-span-12 lg:col-span-6 overflow-hidden"
                  : "m-1.5 p-4 rounded-md bg-[#272727] col-span-12 lg:col-span-4 overflow-hidden"
              }
            >
              <div className="flex  w-full p-2  ">
                <div className="w-[25%]  ">
                  <div className=" rounded-full overflow-hidden w-16 h-16 bg-black  ">
                    <Image
                      src={value.user_image ? value.user_image : PlcHolder}
                      alt={value.user_name}
                      width={70}
                      height={70}
                      style={
                        value.user_image
                          ? { aspectRatio: "1/1" }
                          : { aspectRatio: "1/1" }
                      }
                      className="  "
                    />
                  </div>
                </div>
                <div>
                  <h1 className=" text-2xl uppercase text-white   ">
                    {value.user_name}
                  </h1>
                  <h3 className="text-lg uppercase text-white   ">
                    faculty of {value.faculty}
                  </h3>
                </div>
              </div>
              <div className=" w-full p-2 pt-0   ">
                <Link href={`/${value.user_handle}/userdata`}>
                  <h3 className="text-white leading-[1.9rem] capitalize ">
                    Handle :-{" "}
                    <span className="text-[#ff9d00]">{value.user_handle}</span>
                  </h3>
                </Link>
                <h3 className="text-white leading-[1.9rem] capitalize ">
                  address :-{" "}
                  <span className="text-[#ff9d00]">{value.address}</span>
                </h3>
                <h3 className="text-white leading-[1.9rem] capitalize ">
                  contact :-{" "}
                  <span className="text-[#ff9d00]">{value.contact}</span>
                </h3>
                <h3 className="text-white leading-[1.9rem] capitalize ">
                  date of birth :-{" "}
                  <span className="text-[#ff9d00]">{value.dob}</span>
                </h3>
                <h3 className="text-white leading-[1.9rem]   ">
                  Email :- <span className="text-[#ff9d00]">{value.email}</span>
                </h3>
                <h3 className="text-white leading-[1.9rem]   ">
                  Created Time :-{" "}
                  <span className="text-[#ff9d00]">{value.created_at[1]}</span>{" "}
                </h3>
                <h3 className="text-white leading-[1.9rem]   ">
                  Created Date :-{" "}
                  <span className="text-[#ff9d00]">{value.created_at[0]}</span>{" "}
                </h3>
              </div>
              <div className="flex justify-between w-full ">
                <div className="text-white my-auto flex ">
                  Status
                  <div
                    style={{
                      backgroundColor:
                        value.profile_status === "Deactive"
                          ? "#ff0000"
                          : "#04ff04",
                      boxShadow:
                        value.profile_status === "Deactive"
                          ? "1px 1px 20px 4px #ff0000"
                          : "1px 1px 20px 4px  #04ff04",
                    }}
                    className={"  w-1.5 h-1.5 my-auto mx-4 rounded-full"}
                  ></div>
                </div>
                <div className="h-full flex ">
                  <Link href={`/${value.user_handle}`}>
                    <button
                      type="button"
                      className={
                        " transition-all mx-1 px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem] hover:bg-[#ff9d00] hover:text-white tracking-wider  "
                      }
                    >
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      ActivateProfile(value.profile_status, value.user_handle);
                    }}
                    className={
                      " transition-all mx-1 px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem] hover:bg-[#ff9d00] hover:text-white "
                    }
                  >
                    {value.profile_status === "Deactive"
                      ? "Activate"
                      : "Dactivate"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TransitionDiv>
  );
};

export default function Admin({ Profiles }) {
  const [expend, setExpend] = useState(false);
  const [searchValue, setSearchValue] = useState();

  return (
    <MainStyle className="w-screen h-screen bg-black overflow-hidden  ">
      <AdminLogoBar setSearchValue={setSearchValue} />
      <div className="flex w-full h-[90%] ">
        <AdminSidebar expend={expend} setExpend={setExpend} />
        <ProfilsSection
          searchValue={searchValue}
          expend={expend}
          Data={Profiles}
        />
      </div>
    </MainStyle>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get_all_profiles");

  const Profiles = await res.json();
  return {
    props: { Profiles }, // will be passed to the page component as props
  };
}
