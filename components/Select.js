import { useState, useMemo, useEffect } from "react";

import styled from "styled-components";

// activate when app goes outside from india
// import { Country, State, City } from "country-state-city";
// activate when app goes outside from india

const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function Select({ states, setselectedStates, finder }) {
  // in filter
  const [value, setValue] = useState();
  const [searchData, setSearchData] = useState("");

  useEffect(() => setselectedStates(value));

  // country list

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
    <SelectWrap className="  rounded-l-lg">
      <input
        value={value}
        className=" rounded-lg  lg:rounded-l-lg  "
        placeholder="Select Country"
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
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
          {states
            .filter((data) => {
              const ValueCaseSwitcher = searchData.toLowerCase();
              const ListCaseSwitcher = data.toLowerCase();

              return ListCaseSwitcher.startsWith(ValueCaseSwitcher);
            })
            .map((data) => {
              return (
                <div
                  key={data}
                  onClick={() => ArrayDataToInput(data)}
                  className={`cursor-pointer m-1 p-2 rounded-md bg-slate-100`}
                >
                  {data}
                </div>
              );
            })}
        </div>
      </div>
    </SelectWrap>
  );
}
