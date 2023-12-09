import Image from "next/image";
import styled from "styled-components";

// models
import User from "../../models/user";

// Database
import dbConnect from "../../config/dbConnect";

const InnerRows = styled.div`
  box-shadow: 0px 0px 5px;
`;

function UsersData({ UserData }) {
  return (
    <div className="p-4">
      <section>
        <h1 className="text-center text-4xl p-4 text-[#ff9d00] ">
          Secret Data !!!!!!!!!!!!
        </h1>
      </section>
      <h1 className="w-full pl-10 text-3xl  mt-[5rem]">General Data : -</h1>
      <section className="mx-auto my-3 rounded-xl flex  bg-gray-300 w-[95%] h-[30rem]  ">
        <div className="w-[50%] h-full  flex justify-center items-center  ">
          <Image
            width={200}
            height={200}
            alt={UserData.user_name}
            src={UserData.user_image}
            className="rounded-xl"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className=" w-[50%] p-2 py-[5rem] grid items-center  ">
          <h1 className="text-3xl uppercase font-medium   ">
            {UserData.user_name}
          </h1>
          <h3 className="text-md uppercase font-medium   ">
            faculty of {UserData.faculty}
          </h3>

          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            Handle :-{" "}
            <span className="text-[#ff9d00]">{UserData.user_handle}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            address :-{" "}
            <span className="text-[#ff9d00]">{UserData.address}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            contact :-{" "}
            <span className="text-[#ff9d00]">{UserData.contact}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            data of birth :-{" "}
            <span className="text-[#ff9d00]">{UserData.dob}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem]   ">
            Email :- <span className="text-[#ff9d00]">{UserData.email}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            hobbies :-{" "}
            <span className="text-[#ff9d00]">
              {UserData.hobbies.Music ? "Music" : null}{" "}
            </span>
            <span className="text-[#ff9d00]">
              {UserData.hobbies.Travel ? "Travel" : null}{" "}
            </span>
            <span className="text-[#ff9d00]">
              {UserData.hobbies.Movie ? "Movie" : null}{" "}
            </span>
            <span className="text-[#ff9d00]">
              {UserData.hobbies.Sports ? "Sports" : null}{" "}
            </span>
            <span className="text-[#ff9d00]">
              {UserData.hobbies.Reading ? "Reading" : null}{" "}
            </span>
          </h3>
        </div>
      </section>
      <h1 className="w-full pl-10 text-3xl mt-16 ">Workshops : -</h1>
      <section className="mx-auto my-3 rounded-xl bg-gray-300 w-[95%] flex flex-col items-center p-4 ">
        <InnerRows className="flex w-[50%] justify-evenly h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Workshop Name</div>
          <div>Workshop Place</div>
        </InnerRows>
        {UserData.workshops.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-evenly h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.workShopName}</div>
              <div>{data.workShopPlace}</div>
            </InnerRows>
          );
        })}
      </section>
      <h1 className="w-full pl-10 text-3xl mt-16 ">Education : -</h1>
      <section className="mx-auto my-3 rounded-xl bg-gray-300 w-[95%] flex flex-col items-center p-4  ">
        <InnerRows className="flex w-[50%] justify-between px-[8rem]  h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Year</div>
          <div>University</div>
          <div>Degree</div>
        </InnerRows>
        {UserData.education.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-between px-[8rem] h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.EducationYear}</div>
              <div>{data.Board}</div>
              <div>{data.Degree}</div>
              <div>{data.Result}</div>
            </InnerRows>
          );
        })}
      </section>
      <h1 className="w-full pl-10 text-3xl mt-16 ">Experince : -</h1>
      <section className="mx-auto my-3 rounded-xl bg-gray-300 w-[95%] flex flex-col items-center p-4  ">
        <InnerRows className="flex w-[50%] justify-between px-[8rem]  h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Year</div>
          <div>Organization</div>
          <div>Designation</div>
          <div>Subject</div>
        </InnerRows>
        {UserData.experince.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-between px-[8rem] h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.ExperinceYear}</div>
              <div>{data.Organization}</div>
              <div>{data.Designation}</div>
              <div>{data.Subject}</div>
            </InnerRows>
          );
        })}
      </section>
      <h1 className="w-full pl-10 text-3xl mt-16 ">Testimonials : -</h1>
      <section className="mx-auto my-3 rounded-xl bg-gray-300 w-[95%] grid grid-cols-4 p-4  ">
        {UserData.testimonials.map((data) => {
          return (
            <div className="flex  justify-between h-[5rem] col-span-1  m-3 items-center p-4 rounded-lg bg-white  ">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src={UserData.image}
                style={{ aspectRatio: "1/1" }}
              />
              <div>{data.StudentName}</div>
              <div>{data.StudentClass}</div>
              {/* <div>{data.ForStudents}</div> */}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default function UserData({ UserData }) {
  return <UsersData UserData={UserData} />;
}

export async function getServerSideProps(event) {
  dbConnect();

  const user = await User.findOne({
    user_handle: event.query.profileid,
  }).lean();

  const UserData = await JSON.parse(JSON.stringify(user));

  return { props: { UserData } };
}
