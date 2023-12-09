import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// components
import NavigationControls from "./context";

const AnimationClass = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: PopUp 1s forwards;

  @keyframes PopUp {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CenterSection = styled.div`
  height: 100%;
  transition: 1s ease-in-out;

  .mainTransition {
    transition: 1s ease-in-out;
  }

  .maintile1,
  .maintile2,
  .maintile3,
  .maintile4,
  .maintile5,
  .maintile6 {
    height: 100%;
    width: 100%;
    background-color: #272727;
    position: absolute;
  }

  /* color: #ff9d00; yellow */
  /* color: #272727; card */
  display: flex;
  justify-content: center;
  align-items: center;

  /* main tile no2 Start */
  /* main tile no2 */

  #main-tile2 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .second-image {
    transform: translateX(-1.5rem) translateY(1.5rem);
  }

  .list-item {
    line-height: 45px;
    font-size: 19px;
  }

  small {
    color: #b0b0b0;
  }

  /* .hobbies{
    display: none;
} */

  .hobbies > i {
    color: #ff9d00;
  }

  .hobbies-wrap::before {
    content: "";
    position: absolute;
    width: 98%;
    height: 1px;
    display: block;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }

  .hobbies-wrap::after {
    content: "";
    width: 98%;
    top: 100%;
    height: 1px;
    position: absolute;
    display: block;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }

  /* dots in key Frames css */

  /* main tile no2 */
  /* main tile no2 End */

  /* main tile no3 Start */
  /* main tile no3 */

  #main-tile3 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }
  .Education-main2::before {
    content: "";
    width: 1px;
    left: 50%;
    height: 100%;
    display: block;
    position: absolute;
    background: linear-gradient(
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }
  /* .Education-main2::after {
    content: "";
    width: 100%;
    top: 50%;
    height: 1px;
    display: block;
    position: absolute;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  } */

  /* main tile no3 */
  /* main tile no3 End */
  /*for education experince yellow lines*/

  @media screen and (min-width: 768px) {
    .Education-main::before {
      content: "";
      width: 1px;
      left: 50%;
      height: 100%;
      display: block;
      position: absolute;
      background: linear-gradient(
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
    .Education-main::after {
      content: "";
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      height: 1px;
      display: block;
      position: absolute;
      background: linear-gradient(
        0.25turn,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
    .Experince-main::before {
      content: "";
      width: 1px;
      left: 50%;
      height: 100%;
      display: block;
      position: absolute;
      background: linear-gradient(
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }

    /* .Experince-main::after {
      content: "";
      width: 100%;
      top: 50%;
      left: 50%;
      height: 1px;
      display: block;
      position: absolute;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        90deg,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    } */

    .table-rows::after {
      content: "";
      width: 100%;
      left: 50%;
      top: 100%;
      transform: translate(-50%);
      height: 1px;
      display: block;
      position: absolute;
      background: linear-gradient(
        0.25turn,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
  }

  /*for education experince yellow lines*/
  /* main tile no4 Start */
  /* main tile no4 */

  #main-tile4 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .send {
    transition: 0.3s ease-in-out;
  }

  .send:hover {
    background-color: #ff9d00;
    color: white;
  }

  /* main tile no4 */
  /* main tile no4 End */
  /* main tile no5 Start */
  /* main tile no5 */

  #main-tile5 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .Testimonials-heading {
    width: 100%;

    &::after {
      content: "";
      width: 50%;
      display: inline;
      background: linear-gradient(
        0.25turn,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
  }

  .Testimonials-cards {
    box-shadow: 2.5px 2.5px 8.5px #0000008a;
    position: relative;
    &::before {
      content: "";
      left: 0;
      top: 80%;
      width: 10rem;
      height: 28rem;
      display: block;
      position: absolute;
      background-color: #ffffff0d;
      transform: translate(-50%, -50%) rotate(340deg);
      z-index: -10;
    }
  }

  .icons-name-wrap > i {
    color: #ff9d00;
    font-size: 2rem;
  }

  .owl-carousel .owl-nav {
    display: none;
  }

  .owl-carousel .owl-stage {
    padding: 5% 0rem;
  }

  @media screen and (min-width: 1024px) {
    .owl-carousel .owl-nav {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
    }
    .owl-carousel .owl-stage {
      padding: 5% 0rem;
    }
    .owl-carousel .owl-nav button.owl-prev,
    .owl-carousel .owl-nav button.owl-next {
      width: 1.5rem;
      height: 5rem;
      position: relative;
      margin: 0;
      color: #ff9d00;
      background: #000;
      padding: 1rem 0.2rem;
      padding: 0;
      transition: 0.2s ease-in-out;

      & > span {
        width: 100%;
        height: 100%;
        display: block;
        font-size: 70px;
        line-height: 0rem;
        position: absolute;
        transform: translateY(-9px);
      }

      &:hover {
        background-color: transparent;
      }
    }

    .owl-carousel .owl-nav button.owl-prev {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
    .owl-carousel .owl-nav button.owl-next {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }
  /* main tile no5 */
  /* main tile no5 End */
`;

export default function CenterContent({ children }) {
  const router = useRouter();
  const { globalNavBehaviour, setGlobalnavBehaviour } =
    useContext(NavigationControls);

  const ExpendChecker = globalNavBehaviour;
  const [centerTileWidth, setCenterTileWidth] = useState();
  const [centerTileInitial, setCenterTileAnimte] = useState();

  useEffect(() => {
    const resolution = window.innerWidth;
    console.log(resolution);
    if (resolution >= 1024) {
      setCenterTileWidth("49.5rem");
      setCenterTileAnimte("38rem");
    }

    if (resolution >= 1280) {
      setCenterTileWidth("66rem");
      setCenterTileAnimte("50rem");
    }

    if (resolution >= 1536) {
      setCenterTileWidth("80rem");
      setCenterTileAnimte("61rem");
    }
  });

  const initialsState = {
    width: centerTileInitial,
  };

  const centerAnimate = {
    width: centerTileWidth,
  };

  return (
    <CenterSection>
      <motion.div
        animate={ExpendChecker ? centerAnimate : initialsState}
        transition={{ delay: "0.5" }}
        className="lg:w-[38rem] xl:w-[50rem] 2xl:w-[61rem] tiles-wrap center-tiles-wrap w-full lg:mx-4 h-[100%] lg:h-[100%] flex justify-center items-center relative"
      >
        <AnimationClass key={router.asPath}>{children}</AnimationClass>
      </motion.div>
    </CenterSection>
  );
}
