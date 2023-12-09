import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";

// icons
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedinSolid,
  Copy,
  Check,
} from "./icons";

// image
import Logo from "../public/images/logo.png";
import { useState } from "react";

const MainNav = styled.div`
  .Nav_buttons {
    padding-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Nav_buttons > ul {
    display: flex;
  }

  .Nav_buttons > ul > li {
    position: relative;
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin: 0rem 1.5rem;
  }

  .Nav_buttons ul li a::before {
    content: "";
    width: 100%;
    height: 1.5px;
    top: 100%;
    background-color: white;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: right center;
  }

  .Nav_buttons ul li:hover a::before {
    transform: scaleX(1);
    transform-origin: left center;
  }
`;

const NavBar = () => {
  return (
    <MainNav className="w-full flex justify-between py-2.5 px-4 overflow-hidden relative bg-[#ff6e01] ">
      <div className="logo">
        <Image
          alt=""
          src={Logo}
          width={150}
          height={100}
          style={{ zIndex: "5", position: "relative" }}
        />
      </div>
      <div className="Nav_buttons">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </MainNav>
  );
};

const ContainerStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&family=Work+Sans:wght@400;500;600&display=swap");
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
`;

function Container() {
  const [url, seturl] = useState();
  const [linkCopy, setLinkCopy] = useState();

  function Section({ children }) {
    return (
      <div className={` w-full my-14 py-10  `}>
        <div className="  xl:w-[1280px] lg:w-[1024px] w-full mx-auto px-8  ">
          {children}
        </div>
      </div>
    );
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      seturl(window.location.href);
    }, 100);

    return () => clearTimeout(timeOut);
  });

  function LinkCopy(text) {
    setLinkCopy(true);

    let textArea = document.createElement("textarea");
    textArea.innerText = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    let Button = document.createElement("button");

    Button.setAttribute("href", "http://www.google.com/search");
    Button.innerText = "Google Search";
  }
  return (
    <Section className="">
      <ContainerStyle>
        {" "}
        <h1 className="text-center text-5xl my-4">
          Your Profile Will Be Activate In 72 Hours
        </h1>
        <h1 className="text-center text-xl my-4">Please Save This Url</h1>
        <div className="flex justify-center">
          <div className="flex rounded-full overflow-hidden">
            <input
              defaultValue={url}
              type="text"
              className="p-3 w-[25rem] bg-orange-100 outline-none"
            />
            <button
              onClick={() => LinkCopy(url)}
              className="bg-orange-500 p-4 px-8  "
            >
              {linkCopy ? (
                <Check className="text-white text-xl" />
              ) : (
                <Copy className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>
        <div className="button flex justify-center items-center my-8">
          <button className="border-[#ff6e01] border-2 rounded-full text-[#ff6e01] py-3 px-10 hover:shadow-2xl hover:bg-[#ff6e01] hover:text-white transition-colors font-semibold">
            Go Back
          </button>
        </div>
      </ContainerStyle>
    </Section>
  );
}

const FooterStyle = styled.div`
  .copy_right {
    position: relative;
  }
  .copy_right::before {
    content: "";
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
    background: linear-gradient(90deg, #272121, #999b9f, #272121);
    position: absolute;
  }
`;

const Footer = () => {
  return (
    <FooterStyle className="w-full lg:h-[50%] ">
      <div className=" w-full h-full  ">
        <div className="footer-main w-full h-full block lg:flex px-8 bg-[#272121] ">
          <div className="lg:w-[30%] w-full h-full flex justify-center items-center pt-8 lg:pt-8 ">
            <div className="block justify-center items-center ">
              <Image
                width={150}
                height={150}
                src={Logo}
                alt=""
                className="my-8"
              />
              <p className="text-[#999b9f] text-[16px] ">
                Best online offline examination software for all your
                subjective, objective assessments with modern AI Proctoring
                technology to evaluate analytical report of you student. <br />
                Contact:+91 8949986554
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] w-full h-full lg:flex lg:justify-center items-center py-8 ">
            <div className="">
              <h1 className="text-white uppercase col-span-2 font-upper font-semibold px-4 py-4 ">
                explore
              </h1>
              <div className="liner  block lg:flex items-center w-full">
                <ul className=" px-4 ">
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://testntrack.com/know-testntrack">About</a>
                  </li>
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://testntrack.com/blog">Latest News</a>
                  </li>
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://testntrack.com/contact">Contact</a>
                  </li>
                </ul>
                <ul className=" px-4 ">
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://testntrack.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://testntrack.com/terms-and-conditions">
                      Terms Of Use
                    </a>
                  </li>
                  <li className="py-.5 text-[#999b9f] hover:text-white font-semibold ">
                    <a href="https://www.google.com/maps/place/Mobile+Based+Assessment+Platform+-+Test+and+Track/@26.8910769,75.7976863,17z/data=!3m1!4b1!4m5!3m4!1s0x396db5655cbef335:0x43cb801235ae70ea!8m2!3d26.8910721!4d75.7998803">
                      Site Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-full h-full flex lg:justify-center items-center py-8 ">
            <div className="">
              <h1 className="text-white uppercase col-span-2 font-upper font-semibold px-4 mt-[-1rem] pb-4  ">
                Social
              </h1>
              <div className="items-center flex  w-full">
                <a href="https://www.facebook.com/testntrack">
                  <div className="social text-[#999b9f] bg-[#1c1e22] hover:bg-orange-500 hover:text-white  w-10 h-10 flex justify-center items-center rounded-full mx-2  ">
                    <Facebook />
                  </div>
                </a>
                <a href="https://twitter.com/testntrack">
                  <div className="social text-[#999b9f] bg-[#1c1e22] hover:bg-orange-500 hover:text-white  w-10 h-10 flex justify-center items-center rounded-full mx-2  ">
                    <Twitter />
                  </div>
                </a>
                <a href="https://www.instagram.com/testntrack/">
                  <div className="social text-[#999b9f] bg-[#1c1e22] hover:bg-orange-500 hover:text-white  w-10 h-10 flex justify-center items-center rounded-full mx-2  ">
                    <Instagram />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/testntrack">
                  <div className="social text-[#999b9f] bg-[#1c1e22] hover:bg-orange-500 hover:text-white  w-10 h-10 flex justify-center items-center rounded-full mx-2  ">
                    <LinkedinSolid />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right bg-[#272121] relative ">
          <h5 className="text-[#999b9f] font-semibold text-center font p-8 ">
            <span className="text-[#999b9f]">©</span> copyright 2022 by
            Testntrack.com
          </h5>
        </div>
      </div>
    </FooterStyle>
  );
};

export default function Activation_Page() {
  return (
    <main className="w-screen h-screen overflow-x-hidden ">
      <NavBar />
      <Container />
      <Footer />
    </main>
  );
}
