import Image from "next/image";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import styled from "styled-components";
import Link from "next/link";

// icon
import { FlatLocation } from "../components/icons";

// component
import Indian_states_cities_list from "../components/indianstatescity";

// image
import { PlcHolder } from "../components/images";

const MainStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400&family=Teko:wght@300&display=swap");
  font-family: "Rubik", sans-serif;
  /* font-family: "Teko", sans-serif; */
`;

const SearchBar = styled.div`
  .InputWrap {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(226, 232, 240);

    input,
    select {
      outline: none;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: white;
    }
  }
  button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    font-weight: 500;
    font-size: 20px;
    height: 100%;
    width: 50%;
    background-color: #ff9d00;
  }
`;
const SearchBarMobile = styled.div`
  .InputWrap {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    margin: 0.5rem 0rem;

    input {
      background: #e2e8f0;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 1rem;
    }
  }
  button {
    font-weight: 500;
    font-size: 20px;
    height: 100%;
    width: 100%;
    background-color: #ff9d00;
  }
`;
const FooterStyle = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 2px;
    position: absolute;
    /* background-color: #a1bee7; */
    background: linear-gradient(90deg, #e2e8f0 0%, #8b8b8b, #e2e8f0 100%);

    /* background-color: #000; */
  }
`;

function Header() {
  return (
    <div className="w-full  h-[4rem] flex justify-between p-4 fixed z-10  top-0 left-0 bg-[#0000004d] ">
      <div>
        <h1 className="text-2xl  text-white  ">LOGO</h1>
      </div>
      <div className=" flex justify-center ">
        <ul className="flex">
          <li className="px-8 text-white">
            <a href="">Home</a>
          </li>
          <li className="px-8 text-white">
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const ImageSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(/images/marketplace/bg.webp);
  background-size: cover;
  background-repeat: no-repeat;
`;

function ImageContainer() {
  return (
    <section className="pt-0 pb-0 ">
      <ImageSection className="w-full h-[25rem] flex justify-center items-center text-lg md:text-2xl  text-white text-center lg:text-5xl capitalize leading-snug ">
        <h1 className="px-4 lg:leading-[3.7rem]">
          Latest online educational job opportunities around the world Your
          search starts here
        </h1>
      </ImageSection>
    </section>
  );
}

const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function SelectState({ states, setselectedStates }) {
  // in filter
  const [inputvalue, setValue] = useState("");
  const [searchData, setSearchData] = useState("");

  useEffect(() => setselectedStates(inputvalue));

  // country list

  // for toggle list
  const [country, setcountry] = useState(false);
  // for toggle list
  const ArrayDataToInput = (data, id) => {
    setValue({ statename: data, id: id });
    setcountry(false);
  };

  const filterCountryText = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <SelectWrap className="  rounded-l-lg">
      <input
        value={inputvalue.statename}
        className=" rounded-lg  lg:rounded-l-lg  "
        placeholder="Select State"
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
        onChange={() => null}
      />
      <div
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
        className={
          country
            ? "w-full h-[25rem] rounded-lg p-4 mt-1 absolute overflow-hidden bg-white transition-all z-[1]"
            : "w-full h-0 rounded-lg bg-white absolute overflow-hidden  opacity-0 transition-all"
        }
      >
        <div className="shadow-lg">
          <input
            type="text"
            onChange={filterCountryText}
            className="w-full p-2 border-2 border-[#ff9d00] rounded-lg mb-4"
            placeholder="Search..."
          />
        </div>
        <div className="overflow-y-scroll h-[80%] ">
          {states
            .filter((data) => {
              const ValueCaseSwitcher = searchData.toLowerCase();
              const ListCaseSwitcher = data.label.toLowerCase();

              return ListCaseSwitcher.startsWith(ValueCaseSwitcher);
            })
            .map((data) => {
              return (
                <div
                  key={data.value}
                  onClick={() => ArrayDataToInput(data.label, data.id)}
                  className={`cursor-pointer m-1 p-2 rounded-md bg-slate-100`}
                >
                  {data.label}
                </div>
              );
            })}
        </div>
      </div>
    </SelectWrap>
  );
}

function SelectCity({ states, finder, setselectedCity }) {
  // in filter
  const [inputvalue, setValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const State_Array = Object.values(states);

  useEffect(() => setselectedCity(inputvalue));

  // for toggle list
  const [country, setcountry] = useState(false);
  // for toggle list
  const ArrayDataToInput = (data) => {
    setValue(data);
    setcountry(false);
  };

  const filterCountryText = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <SelectWrap className="rounded-l-lg">
      <input
        value={inputvalue}
        className="rounded-lg lg:rounded-l-lg"
        placeholder="Select City"
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
        onChange={() => null}
      />
      <div
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
        className={
          country
            ? "w-full h-[25rem] rounded-lg p-4 mt-1 absolute overflow-hidden bg-white transition-all"
            : "w-full h-0 rounded-lg bg-white absolute overflow-hidden  opacity-0 transition-all"
        }
      >
        <div className="shadow-lg">
          <input
            type="text"
            onChange={filterCountryText}
            className="w-full p-2 border-2 border-[#ff9d00] rounded-lg mb-4"
            placeholder="Search. . ."
          />
        </div>
        <div className="overflow-y-scroll h-[80%] ">
          {State_Array[finder.id]
            ?.filter((data) => {
              const ValueCaseSwitcher = searchData.toLowerCase();
              const ListCaseSwitcher = data.label.toLowerCase();

              return ListCaseSwitcher.startsWith(ValueCaseSwitcher);
            })
            .map((data) => {
              return (
                <div
                  key={data.label}
                  onClick={() => ArrayDataToInput(data.label)}
                  className={`cursor-pointer m-1 p-2 rounded-md bg-slate-100`}
                >
                  {data.label}
                </div>
              );
            })}
        </div>
      </div>
    </SelectWrap>
  );
}

function Filters({ setfilter }) {
  const resolution = useMedia("(min-width:700px)", true);
  const Indian_states = Indian_states_cities_list.STATES_OBJECT;
  const Indian_Cites = Indian_states_cities_list.STATE_WISE_CITIES;
  const [selectedStates, setselectedStates] = useState("");
  const [selectedCity, setselectedCity] = useState("");

  return (
    <div className="SearchBar  w-full bg-slate-200 flex justify-center  ">
      {resolution ? (
        <SearchBar className="w-[80%] h-20 bg-white  rounded-lg -translate-y-2/4 shadow-xl z-[1] flex justify-between items-center  ">
          <div style={{ borderTopLeftRadius: "8px" }} className="InputWrap">
            <SelectState
              states={Indian_states}
              setselectedStates={setselectedStates}
            />
          </div>
          <div className="InputWrap flex">
            <div className="w-[10%] h-full flex justify-center items-center text-2xl text-[#c3cfe0]  ">
              <FlatLocation />
            </div>
            <SelectCity
              states={Indian_Cites}
              finder={selectedStates}
              setselectedCity={setselectedCity}
            />
          </div>
          <button
            onClick={() => {
              setfilter({
                State: selectedStates.statename,
                City: selectedCity,
              });
            }}
          >
            FIND
          </button>
        </SearchBar>
      ) : (
        <SearchBarMobile className="flex flex-col w-[80%] z-[1] ">
          <div className="bg-white p-4 rounded-lg mt-4  flex flex-col">
            <div className="InputWrap  ">
              <SelectState
                states={Indian_states}
                setselectedStates={setselectedStates}
              />
            </div>
            <div className="InputWrap flex ">
              <SelectCity
                states={Indian_Cites}
                finder={selectedStates}
                setselectedCity={setselectedCity}
              />
            </div>
            <button
              onClick={() => {
                setfilter({
                  State: selectedStates.statename,
                  City: selectedCity,
                });
              }}
              className="p-4 rounded-lg"
            >
              FIND
            </button>
          </div>
        </SearchBarMobile>
      )}
    </div>
  );
}

function ProFiles({ Profiles, filter }) {
  return (
    <div className="w-full pb-14 bg-slate-200 flex relative -z-0 justify-center ">
      <div className="w-[80%] grid justify-center grid-cols-12 ">
        {/* cards */}

        {Profiles.map((value, index) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-72 mt-20 rounded-lg p-4 relative bg-white shadow-2xl sm:mx-2"
              key={index}
            >
              <div className="w-[6rem] h-[6rem] absolute bg-slate-200 border-[3px] -translate-y-2/3 translate-x-5 border-white rounded-full flex justify-center items-center overflow-hidden ">
                <div className=" w-[5.2rem] h-auto ">
                  <Image
                    className="bg-cover rounded-full "
                    src={value.user_image ? value.user_image : PlcHolder}
                    style={{ aspectRatio: "1/1" }}
                    width={100}
                    height={100}
                    // src={PlaceHolder}
                    alt="User Image"
                    // quality={100}
                  />
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl ">{value.user_name}</h1>
                <h2 className="text-xl mt-2 uppercase text-green-500 font-bold  ">
                  {value.faculty}
                </h2>
              </div>
              <div className="mt-8 mb-2 flex justify-between">
                <div>
                  <h5 className="">Location :</h5>
                  <h3 className="flex my-1 text-sm font-semibold  ">
                    <FlatLocation className="m-1 mx-1 " /> {value.city}
                  </h3>
                </div>
                <div>
                  <h5 className="">Experince :</h5>
                  <h3 className="flex my-1 text-sm font-semibold">
                    {value.experince_year}
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={`/${value.user_handle}`}>
                  <button className=" transition-all mx-2 px-8 py-2 rounded-md text-green-500 border-2 border-green-500 my-[0.5rem]  hover:bg-green-500 hover:text-white ">
                    View
                  </button>
                </Link>
              </div>
            </div>
          );
        })}

        {/* cards */}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <FooterStyle className="bg-slate-200">
      <h5>Copyright@testntrack.com</h5>
    </FooterStyle>
  );
}

export default function MarketPlace({ Profiles }) {
  const [filter, setfilter] = useState("");
  return (
    <MainStyle className="w-screen h-screen overflow-x-hidden">
      <Header />
      <ImageContainer />
      <Filters setfilter={setfilter} />
      <ProFiles Profiles={Profiles} filter={filter} />
      <Footer />
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
