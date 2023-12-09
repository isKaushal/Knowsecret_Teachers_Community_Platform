// icons
import {
  Instagram,
  Email,
  Facebook,
  LinkedInRegular,
  Pinterest,
  Twitter,
} from "./icons";
import styled from "styled-components";

const SibarWrap = styled.div`
  background-color: #272727;
  width: 5.5rem;
  height: 100%;
  .date {
    color: #ff9d00;
    font-size: 1.8rem;
    font-weight: 600;
  }

  .month {
    color: #ffffff;
    font-size: 18px;
  }
  .year {
    color: #ffffff;
    font-size: 20px;
  }

  .follow-text {
    color: #ffffff;
    transform: rotateZ(90deg);
  }

  .custom-transition {
    transition: 0.3s ease-in-out;
  }

  .social-icons-wrap {
    transition: none;
    font-size: 20px;
  }
  .social-icons-wrap > a {
    transition: none;
  }
  .social-icons-wrap > i {
    transition: none;
  }
`;

export default function Sidebar() {
  const monthEng = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();
  const DATE = today.getDate();
  const MONTH = monthEng[today.getMonth()];
  const YEAR = today.getFullYear();

  return (
    <SibarWrap className=" rounded-lg overflow-hidden col-span-1 hidden lg:block lg:h-[100%] ">
      {/* <!-- TIME IN JS --> */}
      <div
        id="sidebar-container-timedate"
        className="sidebar-container-timedate grid text-center h-[20%] p-2"
      >
        <div id="date" className="date">
          <div id="date" className="date">
            {DATE}
          </div>
          <div id="month" className="month">
            {MONTH}
          </div>
          <div id="year" className="year">
            {YEAR}
          </div>
        </div>
      </div>
      {/* <!-- TIME IN JS --> */}
      <div className="follow-me text-center justify-center items-center grid h-[60%]">
        <div className="w-full h-full">
          <div className="follow-text flex items-center text-sm font-semibold uppercase h-[30%] w-full">
            follow <span className="text-transparent">-</span>
            <span className="text-[#ff9d00]">me</span>
          </div>
          <div className="line-wrap w-full h-max flex justify-center">
            <div className="yellowline w-0.5 rounded-full lg:h-20 xl:h-24 bg-[#ff9d00]"></div>
          </div>
          <div className="social-icons-wrap grid justify-center items-start mt-[60%] text-white h-[60%]">
            <a target="_blank" href="https://www.instagram.com/test_and_track/">
              <Instagram className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQxnhmZrNGvDbDlbnRWtCSCPsrZbkkrvCxWQQcmCzCVJPwjHkKzbqDJQMFrJSxnQlSgV"
            >
              <Email className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
            <a target="_blank" href="https://www.facebook.com/testntrack">
              <Facebook className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/testntrack/?viewAsMember=true"
            >
              <LinkedInRegular className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
            <a target="_blank" href="https://twitter.com/testntrack">
              <Twitter className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
            <a
              target="_blank"
              href="https://www.pinterest.com/HybridExamSystem/"
            >
              <Pinterest className="custom-transition text-xl my-1 hover:text-[#ff9d00]" />
            </a>
          </div>
        </div>
      </div>
    </SibarWrap>
  );
}
