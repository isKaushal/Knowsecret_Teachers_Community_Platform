import styled from "styled-components";
import Image from "next/image";
// image
import { ErrorImg } from "../components/images";
// image

const ErrorPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bfcdd6;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    .err-text > :nth-child(1) {
      font-size: 40px;
    }
    .err-text > :nth-child(2) {
      font-size: 20px;
    }
  }

  .dot > :nth-child(1) {
    animation: animate 1.5s linear infinite;
  }

  .dot > :nth-child(2) {
    animation: animate 1.5s linear infinite;
    animation-delay: 0.2s;
  }

  .dot > :nth-child(3) {
    animation: animate 1.5s linear infinite;
    animation-delay: 0.4s;
  }

  .dot > :nth-child(4) {
    font-family: none;
    animation: animate 1.5s linear infinite;
    animation-delay: 0.6s;
    color: red;
  }

  @keyframes animate {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export default function Pages() {
  return (
    <ErrorPageStyle className="font-[Segoe UI , Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji] lg:font-[cursive] ">
      <div className=" w-full">
        <div className="inner-wrap justify-center items-center grid  lg:flex w-full">
          <div className=" lg:w-[40%] lg:mt-[-10%] flex justify-center items-center">
            <Image
              className="w-full sm:w-[60%] md:w-[70%]"
              src={ErrorImg}
              alt=""
            />
          </div>
          <div className="lg:w-[60%] h-full items-end grid">
            <div className="w-full justify-center">
              <div className="err-text  grid justify-center items-center">
                <h1 className="text-5xl text-[#45494c] font-bold ">
                  404 Page Not Found
                </h1>
                <h3 className="text-4xl flex  text-[#7b7d7e] font-bold text-center">
                  Oops, Something went wrong
                  <div className="dot">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>!</span>
                  </div>
                </h3>
                <h3 className="text-2xl flex w-full text-[#7b7d7e] font-bold text-center">
                  Page Not Found
                </h3>
                <div className="grid w-full">
                  <div className="button-wrap flex w-full items-center h-[8rem]">
                    <a href="https://testntrack.com/">
                      <button className="bg-blue-500 w-28 h-10 rounded-lg text-white my">
                        Login Page
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorPageStyle>
  );
}
