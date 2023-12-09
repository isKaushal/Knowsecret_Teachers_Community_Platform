import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// style sheets
import FormStyle from "../styles/Form.module.css";

// images
import { Logo } from "../components/images";

// components
import Input from "../components/Input";
import Button from "../components/button";
import SkillsSelect from "../components/skillselect";

//////////////////////////////////// check mark component
function InputCheck({
  placeholder = "Enter Here",
  label = "",
  name = "",
  id = "",
  className = "",
  key = "",
  onChange,
}) {
  return (
    <div className="flex justify-between items-center w-full  ">
      <label htmlFor={id} className="text-white text-lg flex items-center  ">
        <h1>{label}</h1>
        <input
          type="checkbox"
          placeholder={placeholder}
          name={name}
          key={key}
          className={className}
          id={id}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
//////////////////////////////////// check mark component

function ErrorMessage({ data }) {
  const [Animate, setAnimate] = useState(false);

  useEffect(() => {
    if (data?.msg) {
      setAnimate(true);
    }

    setTimeout(() => {
      setAnimate(false);
    }, 5000);
  }, [data]);

  return (
    <AnimatePresence>
      {Animate ? (
        <motion.div
          className={Animate ? "fixed bottom-10 left-10 z-10 text-white bg-red-600 rounded-md py-4 px-6" : "py-0 px-0"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            x: { duration: 0.3 },
            opacity: { duration: 0.3 },
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
            },
          }}
          exit={{ x: -1000, opacity: 0 }}
        >
          {data?.msg}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const PreloderComponent = styled.div`
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;

  svg {
    width: 150px;
    height: 150px;
    animation: animate 4s linear infinite;
  }

  circle {
    transform: translate(50%, 50%) !important;
    animation: animate 4s linear infinite;

    @keyframes animate {
      0% {
        transform: rotateZ(0deg);
        stroke-dasharray: 113;
        stroke-dashoffset: 113;
      }
      100% {
        transform: rotateZ(360deg);
        stroke-dasharray: 113;
        stroke-dashoffset: -113;
      }
    }
  }
`;

function Preloder() {
  return (
    <PreloderComponent className="main-preloder " id="main-preloder">
      <svg>
        <circle strokeWidth={4} stroke="#ffd0b0" fill="none" r="18"></circle>
      </svg>
    </PreloderComponent>
  );
}

const FormNav = styled.div`
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav > ul {
    display: flex;
  }
  .nav > ul > li {
    font-size: 20px;
    font-family: 500;
    margin: 0rem 1.5rem;
    background-blend-mode: color-burn;
  }
`;

function FormHeader() {
  return (
    <FormNav className="px-4 z-5 relative">
      <div className="">
        <div className=" py-3 flex justify-center  lg:justify-between">
          <Image src={Logo} width={150} height={150} alt="LOGO" />
        </div>
        <h3 className="text-center text-[28px] text-white  font-semibold text-4xl py-[5rem] pb-[2rem] font-mono">
          Hello Evaluator! Welcome To TesTnTrack
        </h3>
      </div>
    </FormNav>
  );
}

function Generaldetails({ setgetformimage }) {
  const [inputType, setInputType] = useState("password");
  const [getImage, setgetImage] = useState();
  const [imgError, setimsgError] = useState(FormStyle.imageErrorMsgHide);

  function imageUploder(event) {
    // jpg png checker
    let image = event.target;
    let File = image.files[0];
    if (
      File.size <= 100000
      // && File.type === "image/jpeg"
    ) {
      let reader = new FileReader();
      reader.onloadend = function () {
        let convertedimage = reader.result;
        setgetImage(convertedimage);
      };
      reader.readAsDataURL(File);
      setimsgError(FormStyle.imageErrorMsgHide);
    } else {
      setgetImage((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = null),
      }));
      setimsgError(FormStyle.imageErrorMsg);
    }
  }

  useEffect(() => {
    setgetformimage(getImage);
  });

  const generalDatalist = {
    Userhandle: "",
    Username: "",
    Dob: "",
    Address: "",
    City: "",
    Pincode: "",
    Email: "",
    Contact: "",
    Experince: "",
    Faculty: "",
  };

  const [UserDetails, setUserDetails] = useState(generalDatalist);

  function catchData(event) {
    setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <section>
      <h2 className=" p-4 text-xl mb-4  pb-0">Select your image </h2>
      <h5 className=" p-4 text-white h3 text-sm pt-0 ">
        Note Image Size Should Be Less Than 100kb And <br /> Dimensions Are 500 By 500
      </h5>
      <div className="h-[10rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full ">
        <div className="xl:w-[40%]  lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-center items-center relative">
          <input
            padding="0.6rem"
            type="file"
            name="Userimage"
            onChange={() => imageUploder}
            placeholder="image*"
            style={{ padding: "0.6rem" }}
            className="h-[3rem] rounded-md outline-none p-4 w-full m-1 bg-white"
          />{" "}
          <h3 className={`text-[red] top-[100%] left-4 absolute ${imgError}`}>
            Image Size Should Be Less Than 100kb And Format JPG{" "}
          </h3>
        </div>
        <div className="xl:w-[40%]  lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-center items-center relative ">
          <input
            className="h-[3rem] rounded-md outline-none p-4 w-full m-1 bg-white mt-[2rem] md:mt-1"
            name="Userhandle"
            type="text"
            placeholder="Handle Must Be Unique *"
            onChange={catchData}
          />
        </div>
      </div>

      <h2 className=" p-4 text-xl mb-4  pb-0 ">Your Details:-</h2>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
        <Input name="Username" onChange={catchData} id="name" type="text" placeholder="Name*" />
        <Input name="Dob" placeholder="DOB" id="Dob" onChange={catchData} type="date" className="w-full" />
      </div>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input
          className="p-5 mx-1"
          name="Address"
          id="address"
          onChange={catchData}
          type="text"
          placeholder="Address*"
        />
        <Input className="p-5 mx-1" name="City" id="city" onChange={catchData} type="text" placeholder="City*" />
      </div>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input
          className="p-5 mx-1"
          name="Email"
          id="email"
          onChange={catchData}
          type="email"
          placeholder="Your Email*"
        />
        <Input
          className="p-5 mx-1"
          name="Contact"
          id="contact"
          onChange={catchData}
          type="number"
          placeholder="Contact No.*"
        />
      </div>

      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input className="p-5 mx-1" name="Faculty" onChange={catchData} type="text" placeholder="Faculty *" />
        <Input
          className="p-5 mx-1"
          name="Pincode"
          id="pincode"
          onChange={catchData}
          type="number"
          placeholder="Pin code*"
        />
      </div>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <div className="xl:w-[40%]  lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-center items-center ">
          <select
            className=" h-[3rem] px-4  rounded-md outline-none  m-1 w-full  bg-white "
            name="Experince"
            onChange={catchData}
            type="text"
            placeholder="Your Email*"
            defaultValue=""
          >
            <option value="Experince">Experince</option>
            <option value="0-1">0-1</option>
            <option value="1-2">1-2</option>
            <option value="5-10">5-10</option>
            <option value="10-15">10-15</option>
            <option value="15-20">15-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
          </select>
        </div>
      </div>
    </section>
  );
}

function Gender({ setgetGender }) {
  const Gender = {
    Male: false,
    Female: false,
    NotSay: false,
  };

  const [getGender, setGetgender] = useState(Gender);

  useEffect(() => {
    setgetGender(getGender);
  });

  const GenderSelect = (event) => {
    setGetgender((prev) => ({
      ...prev,
      [event.target.id]: (event.target.value = event.target.checked ? true : false),
    }));
  };

  return (
    <div className="sm:w-[50%] mb-10 lg:mb-0   p-2">
      <h3 className=" text-xl mb-4  pb-0">Gender :-</h3>
      <div className="w-full pl-[2rem] md:pl-[6rem] ">
        <InputCheck className=" m-2 " onChange={GenderSelect} id="Male" type="checkbox" label="Male" />
        <InputCheck className=" m-2 " onChange={GenderSelect} id="Female" type="checkbox" label="Female" />
        <InputCheck className=" m-2 " onChange={GenderSelect} id="NotSay" type="checkbox" label="Rather Not Say" />
      </div>
    </div>
  );
}

function Hobbies({ setHobbies }) {
  const Hobbie = {
    Music: false,
    Travel: false,
    Movie: false,
    Sports: false,
    Reading: false,
  };

  const [checkBox, setCheckBox] = useState(Hobbie);

  useEffect(() => {
    setHobbies(checkBox);
  });

  function checkvalue(event) {
    let boxChecked = event.target.checked;

    if (boxChecked) {
      setCheckBox((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = true),
      }));
    } else {
      setCheckBox((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = false),
      }));
    }
  }

  /////////////////////////////////////////////// main output
  return (
    <div className="sm:w-[50%] p-2">
      <h2 className="pb-0 text-xl mb-4">Hobbies :-</h2>
      <div className="w-full">
        <div className="w-full pl-[2rem] md:pl-[6rem]">
          <InputCheck className=" m-2 " onChange={checkvalue} name="Music" id="music" type="checkbox" label="Music" />
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Travel"
            id="travel"
            type="checkbox"
            label="Travel"
          />
          <InputCheck className=" m-2 " onChange={checkvalue} name="Movie" id="movie" type="checkbox" label="Movie" />
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Sports"
            id="sports"
            type="checkbox"
            label="Sports"
          />
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Reading"
            id="reading"
            type="checkbox"
            label="Reading"
          />
        </div>
      </div>
    </div>
  );
}

function Education({ setEducation }) {
  const storeEducationValues = {
    Degree: "",
    EducationYear: "",
    Board: "",
    Result: "",
  };

  const [educationData, setEducationData] = useState(storeEducationValues);
  const [educationDataList, setEducationDataList] = useState([]);

  useEffect(() => {
    setEducation(educationDataList);
  });

  const onChangeInput = (event) => {
    setEducationData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function addPost() {
    if (educationDataList.length < 4) {
      setEducationDataList((prevList) => [
        ...prevList,
        {
          id: Date.now(),
          Degree: educationData.Degree,
          EducationYear: educationData.EducationYear,
          Board: educationData.Board,
          Result: `${educationData.Result}%`,
        },
      ]);
    }
  }

  const removeEducation = (ID) => {
    setEducationDataList(educationDataList.filter((data) => data.id !== ID));
  };

  return (
    <section>
      <h2 className="pb-0 text-xl mb-4 ">Education:-</h2>
      <h5 className="h3 text-sm pb-2  text-white ">Recomended only FOUR(4) :-</h5>
      <div className=" block  ">
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full ">
          <Input type="text" onChange={onChangeInput} name="Degree" placeholder="Your degree*" />
          <Input type="text" onChange={onChangeInput} name="EducationYear" placeholder="Complete Year*" />
        </div>
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full ">
          <Input type="text" onChange={onChangeInput} name="Board" placeholder="university/board*" />
          <Input type="text" onChange={onChangeInput} name="Result" placeholder="Result(Presentage)*" />
        </div>
      </div>
      <h1 className={educationDataList.length < 4 ? FormStyle.errorMsgHide : FormStyle.errorMsg}>
        Maximum Length Reached ✖
      </h1>
      <div className="app">
        <table
          id="table"
          className=""
          style={{
            width: "100%",
            marginTop: "2rem",
            marginBottom: "2rem",
            color: "white",
          }}
        >
          <thead>
            <tr className="border-[1px] border-white">
              <td className="border-2 border-white text-center">Degree</td>
              <td className="border-2 border-white text-center">Year</td>
              <td className="border-2 border-white text-center">University/Board</td>
              <td className="border-2 border-white text-center">Result</td>
              <td className="border-2 border-white text-center w-[2rem] "></td>
            </tr>
          </thead>
          <tbody>
            {educationDataList.map((value, i) => {
              return (
                <tr key={i}>
                  <td className="border-[1px] border-gray-400 text-center">{value.Degree}</td>
                  <td className="border-[1px] border-gray-400 text-center">{value.EducationYear}</td>
                  <td className="border-[1px] border-gray-400 text-center">{value.Board}</td>
                  <td className="border-[1px] border-gray-400 text-center">{value.Result}</td>
                  <td
                    className="border-[1px] border-gray-400 text-center cursor-pointer "
                    onClick={() => removeEducation(value.id)}
                  >
                    ✖
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Button label="ADD" width="10rem" height="3.5rem" onclick={addPost} />
    </section>
  );
}

function Experince({ setExperince }) {
  const ExperinceEmptyValues = {
    Organization: "",
    Designation: "",
    ExperinceYear: "",
    Subject: "",
  };

  const [experinceData, setexperinceData] = useState(ExperinceEmptyValues);
  const [experinceDataList, setexperinceDataList] = useState([]);

  useEffect(() => {
    setExperince(experinceDataList);
  });

  const onInputchange = (event) => {
    setexperinceData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function addExperince() {
    setexperinceDataList((prev) => [
      ...prev,
      {
        id: Date.now(),
        Organization: experinceData.Organization,
        Designation: experinceData.Designation,
        ExperinceYear: experinceData.ExperinceYear,
        Subject: experinceData.Subject,
      },
    ]);
  }

  function removeExperince(ID) {
    setexperinceDataList(experinceDataList.filter((data) => data.id !== ID));
  }

  return (
    <section>
      <h2 className="text-xl mb-4  pb-0">Experince:-</h2>
      <h5 className=" text-white h3 text-sm  ">Recomended only FOUR(4) :-</h5>
      <div className="block ">
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
          <Input type="text" onChange={onInputchange} name="Organization" placeholder="Organization*" />
          <Input type="text" onChange={onInputchange} name="Designation" placeholder="Designation*" />
        </div>
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
          <Input type="text" onChange={onInputchange} name="ExperinceYear" placeholder="Complete Year*" />
          <Input type="text" onChange={onInputchange} name="Subject" placeholder="Subject*" />
        </div>
      </div>
      <table id="table2" style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
        <thead>
          <tr>
            <td className="border-2 border-white text-center text-white ">Year</td>
            <td className="border-2 border-white text-center text-white ">Organization</td>
            <td className="border-2 border-white text-center text-white ">Year</td>
            <td className="border-2 border-white text-center text-white ">Subject</td>
            <td className="border-2 border-white text-center w-[2rem] "></td>
          </tr>
        </thead>
        <tbody>
          {experinceDataList.map((expData, index) => {
            return (
              <tr key={index}>
                <td className="border-[1px] border-gray-400 text-center text-white ">{expData.Organization}</td>
                <td className="border-[1px] border-gray-400 text-center text-white ">{expData.Designation}</td>
                <td className="border-[1px] border-gray-400 text-center text-white ">{expData.ExperinceYear}</td>
                <td className="border-[1px] border-gray-400 text-center text-white ">{expData.Subject}</td>
                <td
                  className="remove  border-[1px] border-gray-400 text-center cursor-pointer"
                  onClick={() => removeExperince(expData.id)}
                >
                  ✖
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button label="ADD" width="10rem" height="3.5rem" onclick={addExperince} />
    </section>
  );
}

function Awards({ setAwards }) {
  const awardsStructure = {
    AwardYear: "",
    AwardName: "",
  };

  const [awardsData, setAwardsData] = useState(awardsStructure);
  const [awardsList, setAwardsList] = useState([]);

  useEffect(() => {
    setAwards(awardsList);
  });

  function dataAwards(event) {
    setAwardsData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function AwardsDataPost() {
    setAwardsList((prev) => [
      ...prev,
      {
        id: Date.now(),
        AwardYear: awardsData.AwardYear,
        AwardName: awardsData.AwardName,
      },
    ]);
  }

  const removeAwards = (ID) => {
    setAwardsList(awardsList.filter((data) => data.id !== ID));
  };

  return (
    <section>
      <h2 className="p-4 pl-0 text-xl mb-4  pb-0">Awards/Certificates/Participation:-</h2>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input placeholder="Award year" onChange={dataAwards} type="number" name="AwardYear" />
        <Input placeholder="Award name" onChange={dataAwards} type="text" name="AwardName" />
      </div>
      <table className="w-full my-4  ">
        <thead>
          <tr>
            <td className="border-2 border-white text-white text-center ">Award year</td>
            <td className="border-2 border-white text-white text-center ">Award name</td>
            <td className="border-2 border-white w-[2rem] "></td>
          </tr>
        </thead>
        <tbody>
          {awardsList.map((awards, index) => {
            return (
              <tr key={index}>
                <td className="border-[1px] border-gray-400 text-white text-center ">{awards.AwardYear}</td>
                <td className="border-[1px] border-gray-400 text-white text-center ">{awards.AwardName}</td>
                <td
                  className="border-[1px] border-gray-400 text-center cursor-pointer "
                  onClick={() => removeAwards(awards.id)}
                >
                  ✖
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button label="ADD" width="10rem" height="3.5rem" onclick={AwardsDataPost} />
    </section>
  );
}

function Skills({ setSkills }) {
  const skillsArray = [
    {
      SkillName: "Communication",
      Skill: "Communication",
      id: 1,
      value: false,
      rating: 0,
    },
    {
      SkillName: "Leadership",
      Skill: "Leadership",
      id: 2,
      value: false,
      rating: 0,
    },
    {
      SkillName: "Creativity",
      Skill: "Creativity",
      id: 3,
      value: false,
      rating: 0,
    },
    {
      SkillName: "Organization",
      Skill: "Organization",
      id: 4,
      value: false,
      rating: 0,
    },
    {
      SkillName: "Patience",
      Skill: "Patience",
      id: 5,
      value: false,
      rating: 0,
    },
    {
      SkillName: "Problem solving",
      Skill: "Problem_solving",
      id: 6,
      value: false,
    },
    {
      SkillName: "Time management",
      Skill: "Time_management",
      id: 7,
      value: false,
    },
    { SkillName: "Writing", Skill: "Writing", id: 8, value: false },
    { SkillName: "Management", Skill: "Management", id: 9, value: false },
    { SkillName: "Adaptability", Skill: "Adaptability", id: 10, value: false },
    { SkillName: "Teamwork", Skill: "Teamwork", id: 11, value: false },
    {
      SkillName: "Conflict resolution",
      Skill: "Conflict_resolution",
      id: 12,
      value: false,
    },
    {
      SkillName: "Critical thinking",
      Skill: "Critical_thinking",
      id: 13,
      value: false,
    },
    {
      SkillName: "Interpersonal communication",
      Skill: "Interpersonal_communication",
      id: 14,
      value: false,
    },
    {
      SkillName: "Emotional intelligence",
      Skill: "Emotional_intelligence",
      id: 15,
      value: false,
    },
    { SkillName: "Technology", Skill: "Technology", id: 16, value: false },
    { SkillName: "Teaching", Skill: "Teaching", id: 17, value: false },
    {
      SkillName: "Collaboration",
      Skill: "Collaboration",
      id: 18,
      value: false,
    },
    { SkillName: "Learning", Skill: "Learning", id: 19, value: false },
    { SkillName: "Curriculum", Skill: "Curriculum", id: 20, value: false },
    {
      SkillName: "Computer literacy",
      Skill: "Computer_literacy",
      id: 21,
      value: false,
    },
    {
      SkillName: "Decision making",
      Skill: "Decision_making",
      id: 22,
      value: false,
    },
    { SkillName: "Confidence", Skill: "Confidence", id: 23, value: false },
    { SkillName: "Lesson plan", Skill: "Lesson_plan", id: 24, value: false },
  ];

  const [dataList, setDataList] = useState(skillsArray);

  // for count length of filterd list
  const lengthCounter = dataList.filter((data) => data.value);
  // for count length of filterd list

  useEffect(() => {
    setSkills(() => dataList.filter((value) => value.value === true));
  }, [dataList]);

  return (
    <section>
      <h2 className="p-4 pl-0 text-xl pb-0 ">Skills:-</h2>
      <h2 className="pl-0  mb-4  pb-0  text-white ">Choose Any 6 </h2>

      <div className="grid grid-cols-12 ">
        {dataList.map((value, index) => {
          return (
            <div key={index} className=" col-span-12 sm:col-span-6 px-4  ">
              <SkillsSelect
                filter={lengthCounter}
                data={value}
                index={index}
                updater={(index, data) => {
                  setDataList(() => {
                    const tempCopy = [...dataList];
                    tempCopy[index] = data;
                    return tempCopy;
                  });
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WorkShops({ setWorkshops }) {
  const WorkShop = {
    Work_Shop: "",
    Work_Place: "",
  };

  const [workshops, setworkshops] = useState(WorkShop);
  const [workshopArray, setworkshopArray] = useState([]);

  useEffect(() => {
    setWorkshops(workshopArray);
  });

  function HandleWorkShop(event) {
    setworkshops((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function addWorkShop() {
    setworkshopArray((prev) => [
      ...prev,
      {
        id: Date.now(),
        workShopName: workshops.Work_Shop,
        workShopPlace: workshops.Work_Place,
      },
    ]);
  }

  function FilterWork(ID) {
    setworkshopArray(workshopArray.filter((value) => value.id !== ID));
  }

  return (
    <div className="py-14">
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full   ">
        <Input name="Work_Shop" onChange={HandleWorkShop} placeholder="Work Shop Name" type="text" />
        <Input name="Work_Place" onChange={HandleWorkShop} placeholder="Work Shop Place" type="text" />
      </div>
      <Button label="ADD" onclick={addWorkShop} />

      <table className="w-full my-4">
        <thead>
          <tr className="border-[1px] border-white text-white">
            <td className=" w-[50%] border-2 border-white text-center">Work Shop Name</td>
            <td className=" w-[50%] border-2 border-white text-center">Work Shop Place</td>
          </tr>
        </thead>
        <tbody>
          {workshopArray.map((value, index) => {
            return (
              <tr key={index} className="border-[1px] border-white text-white">
                <td className=" w-[50%] border-[1px] border-white text-center">{value.workShopName}</td>
                <td className=" w-[50%] border-[1px] border-white text-center">{value.workShopPlace}</td>
                <td className="cursor-pointer" onClick={() => FilterWork(value.id)}>
                  ✖
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Testimonials({ setTestimonials }) {
  const testimoialsStructure = {
    StudentName: "",
    StudentClass: "",
    ForStudents: "",
  };

  const [testimonialData, settestimonialData] = useState(testimoialsStructure);
  const [testimonialsList, settestimonialsList] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsList);
  });

  function onChangeInput(event) {
    settestimonialData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function addTestimonials() {
    settestimonialsList((prev) => [
      ...prev,
      {
        id: Date.now(),
        StudentName: testimonialData.StudentName,
        StudentClass: testimonialData.StudentClass,
        ForStudents: testimonialData.ForStudents,
      },
    ]);
  }

  const testimonialsRemove = (ID) => {
    settestimonialsList(testimonialsList.filter((data) => data.id !== ID));
  };

  return (
    <section>
      <h2 className="p-4 text-xl mb-4 pb-0">Testimonials(Optional):-</h2>
      <h1 id="testimonial-toggle-arrow" className="cursor-pointer pl-10 text-white flex text-2xl"></h1>
      <div id="" className="my-8">
        <div
          id="tastimonial-container"
          className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full"
        >
          <Input
            className=" testimonals1 mt-[2rem] m-1 p-4 w-80 md:w-80 "
            placeholder="Student Name*"
            type="text"
            name="StudentName"
            onChange={onChangeInput}
          />
          <Input
            className=" testimonals2 mt-[2rem] m-1 p-4 w-80 md:w-80 "
            placeholder="Student Class"
            type="number"
            name="StudentClass"
            onChange={onChangeInput}
          />
        </div>
        <div className="h-max md:flex md:h-max lg:flex lg:h-max justify-center items-center w-full">
          <textarea
            id="testimonals3"
            name="ForStudents"
            onChange={onChangeInput}
            minLength=""
            maxLength="188"
            className="md:m-1 my-1  p-4 w-full xl:w-[80%] rounded-xl resize-none h-[8rem]"
            placeholder="For Student*"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <table className="w-full my-4 ">
          <thead>
            <tr>
              <td className="border-2 border-white text-center text-white ">Student Name</td>
              <td className="border-2 border-white text-center text-white ">Student Class</td>
              <td className="border-2 border-white text-center text-white ">For Student</td>
              <td className="border-2 border-white text-center text-white w-8 "></td>
            </tr>
          </thead>
          <tbody id="testimonial-body">
            {testimonialsList.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="border-[1px] border-gray-400 text-center text-white ">{data.StudentName}</td>
                  <td className="border-[1px] border-gray-400 text-center text-white ">{data.StudentClass}</td>
                  <td className="border-[1px] border-gray-400 text-center text-white ">{data.ForStudents}</td>
                  <td
                    className="border-[1px] border-gray-400 text-center text-white w-8 cursor-pointer "
                    onClick={() => testimonialsRemove(data.id)}
                  >
                    ✖
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button label="ADD" width="10rem" height="3.5rem" onclick={addTestimonials} />
      </div>
    </section>
  );
}

const UIBallsDesign = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;

  & > div {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(251, 142, 39, 1) 0%,
      rgba(209, 39, 251, 1) 150%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

function UIBalls() {
  return (
    <UIBallsDesign>
      <div style={{ top: "10%", left: "0%" }} className="ball_1"></div>
      <div style={{ top: "40%", left: "-10%", width: "400px", height: "400px" }} className="ball_2"></div>
      <div
        style={{
          top: "25%",
          left: "70%",
          width: "250px",
          height: "250px",
          transform: "translate(-50%, -50%)",
        }}
        className="ball_3"
      ></div>
      <div style={{ top: "65%", right: "10%", width: "250px", height: "250px" }} className="ball_4"></div>
      <div style={{ top: "90%", right: "-8%", width: "500px", height: "500px" }} className="ball_5"></div>
      {/* <div style={{ top: "60%", left: "90%" }} className="ball_6"></div>
      <div style={{ top: "70%", left: "0%" }} className="ball_7"></div>
      <div style={{ top: "80%", left: "90%" }} className="ball_8"></div>
      <div style={{ top: "90%", left: "0%" }} className="ball_9"></div> */}
      {/* <div style={{ top: "100%", left: "90%" }} className="ball_10"></div> */}
      {/* <div style={{ top: "110%", left: "0%" }} className="ball_11"></div>
      <div style={{ top: "120%", left: "0%" }} className="ball_12"></div>
      <div style={{ top: "130%", left: "0%" }} className="ball_13"></div>
      <div style={{ top: "140%", left: "0%" }} className="ball_14"></div>
      <div style={{ top: "150%", left: "0%" }} className="ball_15"></div> */}
    </UIBallsDesign>
  );
}

export default function Form() {
  const [getformimage, setgetformimage] = useState();
  const [getGender, setgetGender] = useState();
  const [getHobbies, setHobbies] = useState();
  const [getEducation, setEducation] = useState();
  const [getExperince, setExperince] = useState();
  const [getAwards, setAwards] = useState();
  const [getTestimonials, setTestimonials] = useState();
  const [getSkills, setSkills] = useState();
  const [getworkshops, setWorkshops] = useState();

  // err msg
  const [msg, setmsg] = useState();

  // loder
  const [loder, setLoder] = useState(false);

  const Router = useRouter();

  const formonSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    let formData = new FormData(form);
    formData = Object.fromEntries([...formData.entries()]);

    try {
      const SubmitData = {
        user_image: getformimage,
        user_handle: `@${formData.Userhandle}`,
        user_name: formData.Username,
        dob: formData.Dob,
        address: formData.Address,
        city: formData.City,
        pincode: formData.Pincode,
        email: formData.Email,
        contact: formData.Contact,
        password: formData.Password,
        experince_year: formData.Experince,
        faculty: formData.Faculty,
        gender: getGender,
        hobbies: getHobbies,
        education: getEducation,
        experince: getExperince,
        awards: getAwards,
        skills: getSkills,
        workshops: getworkshops,
        testimonials: getTestimonials,
        created_at: new Date(),
        profile_status: "Deactive",
      };

      const bodyJson = JSON.stringify(SubmitData);

      const response = await fetch(`http://localhost:3000/api/profile_add`, {
        method: "POST",
        body: bodyJson,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const request = await response.json();
      console.log(request);
      setmsg(request);

      if (!request.msg) {
        setLoder(true);
        setTimeout(() => {
          scroll(0, 0);
          Router.push(`/@${formData.Userhandle}`);
        }, 1000);
        setTimeout(() => {
          setLoder(false);
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full overflow-hidden bg-[#ffd0b0] relative">
      {/* //  remove it */}
      {/* <div className=" w-full overflow-hidden bg-[#000000] relative "> */}
      {/* // remove it */}
      <ErrorMessage data={msg} />
      {loder ? <Preloder /> : null}
      <div className=" w-screen h-max relative ">
        <UIBalls />
        <div className=" xl:px-[5rem] lg:px-[3rem] md:px-[2rem] sm:px-[0rem] px-[1rem] ">
          <FormHeader />
          <div
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            className="bg-[#8383834b] p-4 sm:p-14 rounded-t-2xl z-5 relative"
          >
            <form onSubmit={formonSubmit}>
              <Generaldetails setgetformimage={setgetformimage} />
              <div className="sm:flex md:my-16 ">
                <Gender setgetGender={setgetGender} />
                <Hobbies setHobbies={setHobbies} />
              </div>
              <Education setEducation={setEducation} />
              <Experince setExperince={setExperince} />
              <Awards setAwards={setAwards} />
              <Skills setSkills={setSkills} />
              <WorkShops setWorkshops={setWorkshops} />
              <Testimonials setTestimonials={setTestimonials} />
              <Button label="Submit" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
