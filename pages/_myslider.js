import styled from "styled-components";
import Image from "next/image";
import { useReducer } from "react";

// for demo only
// crousel client Images
import profileImg1 from "../public/images/playground/1.jpg";
import profileImg2 from "../public/images/playground/2.jpg";
import profileImg3 from "../public/images/playground/3.jpg";
import profileImg4 from "../public/images/playground/4.jpg";
import profileImg5 from "../public/images/playground/5.jpg";
import profileImg6 from "../public/images/playground/6.jpg";
import profileImg7 from "../public/images/playground/7.jpg";
import profileImg8 from "../public/images/playground/8.jpg";
// import Layout from "components/Layout";

const CarouselContainer = styled.div`
  height: 40rem;
  padding: 2rem;
  position: relative;
  background-image: url(images/playground/background.png);
  /* background: linear-gradient( white , #ff6e01 100% ); */
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  p {
    margin: 1rem;
    font-size: 4rem;
  }

  h3 {
    text-align: center;
    font-size: 3rem;
  }

  h6 {
    text-align: center;
    font-size: 20px;
  }

  button {
    background-color: transparent;
  }

  button:hover p {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CircularImage = styled.div`
  z-index: 1;
  border: 3px solid #ff6e01;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: 1s cubic-bezier(0.69, 0.1, 0.36, 0.88);
  position: absolute;
`;

const SliderTransition = styled.div`
  width: 32rem;

  animation: ${(props) =>
    props.direction === "left"
      ? "fadeInRight 1s cubic-bezier(0.58, 0.08, 0.36, 0.88) "
      : "fadeInLeft 1s cubic-bezier(0.58, 0.08, 0.36, 0.88)"};

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

function EmptyStars({ count }) {
  let emptyStars = 0;

  if (count === 0) {
    emptyStars = 5;
  } else if (count === 1) {
    emptyStars = 4;
  } else if (count === 2) {
    emptyStars = 3;
  } else if (count === 3) {
    emptyStars = 2;
  } else if (count === 4) {
    emptyStars = 1;
  } else if (count === 5) {
    emptyStars = 0;
  }

  const secondDataList = Array.from({ length: emptyStars }, () => {
    if (count <= 5) {
      return (
        <svg height="30" width="30">
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "none", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });

  return secondDataList;
}

function Stars({ count }) {
  const dataList = Array.from({ length: count }, () => {
    if (count <= 5) {
      return (
        <svg height="30" width="30">
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "#ffc83d", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });

  return dataList;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "prev": {
      const { index, list } = state;

      let latestIndex = 0;

      if (index === 0) {
        latestIndex = list.length - 1;
      } else {
        latestIndex = index - 1;
      }

      return {
        list: state.list,
        index: latestIndex,
        direction: "right",
        rating: list[latestIndex].rating,
        centerElement: {
          ...list[latestIndex],
          style: {
            top: "25%",
            left: "50%",
          },
        },
      };
    }

    case "next": {
      const { index, list } = state;

      let latestIndex = 0;

      if (index === list.length - 1) {
        latestIndex = 0;
      } else {
        latestIndex = index + 1;
      }

      return {
        list: state.list,
        index: latestIndex,
        direction: "left",
        rating: list[latestIndex].rating,
        centerElement: {
          ...list[latestIndex],
          style: {
            top: "25%",
            left: "50%",
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

function ImageCarousel({ list }) {
  const [state, dispatch] = useReducer(reducer, {
    list: list,
    direction: "left",
    index: 0,
    rating: 1,
    centerElement: {
      ...list[0],
      style: {
        top: "25%",
        left: "50%",
      },
    },
  });

  // useEffect(() => {
  //     const intervel = setInterval(() => {
  //         next();
  //     }, 3500);

  //     return () => clearInterval(intervel);
  // });

  function prev() {
    dispatch({ type: "prev" });
  }

  function next() {
    dispatch({ type: "next" });
  }

  return (
    <CarouselContainer>
      {state.list.map((value, index) => {
        if (state.index === index) {
          return (
            <CircularImage key={index} style={state.centerElement.style}>
              <Image src={state.centerElement.src} alt="..." />
            </CircularImage>
          );
        } else {
          return (
            <CircularImage key={index} style={value.style}>
              <Image src={value.src} alt="..." />
            </CircularImage>
          );
        }
      })}

      <Slider>
        <button style={{ fontFamily: "none" }} onClick={prev}>
          <p>&#8249;</p>
        </button>
        <div
          style={{ position: "relative", display: "flex", overflow: "hidden" }}
        >
          <SliderTransition direction={state.direction} key={state.index}>
            <div style={{ padding: "1rem", paddingTop: "4rem" }}>
              <div>
                <h6 style={{ fontSize: "15px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ex nostrum impedit minima aspernatur nisi laudantium
                  consequatur perspiciatis voluptate totam placeat, in non, quod
                  quos et voluptas animi. Eius, harum?
                </h6>
              </div>
              <div>
                <h3
                  style={{
                    lineHeight: "40px",
                    fontSize: "37px",
                    padding: "0.5rem 0rem",
                  }}
                >
                  {state.centerElement.para}
                </h3>
              </div>
              <div>
                <h6 style={{ lineHeight: "5px", padding: "1rem 0rem" }}>
                  <b>{state.centerElement.subPara}</b>
                </h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stars count={state.rating} />
                <EmptyStars count={state.rating} />
              </div>
            </div>
          </SliderTransition>
        </div>
        <button style={{ fontFamily: "none" }} onClick={next}>
          <p>&#8250;</p>
        </button>
      </Slider>
    </CarouselContainer>
  );
}

export default function Playground() {
  const dataList = [
    {
      src: profileImg1,
      rating: 1,
      alt: "this is 1",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "20%",
        top: "10%",
        scale: "0.4",
      },
    },
    {
      src: profileImg2,
      rating: 2,
      alt: "this is 2",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "5%",
        top: "35%",
        scale: "0.6",
      },
    },
    {
      src: profileImg3,
      rating: 3,
      alt: "this is 3",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "20%",
        top: "60%",
        scale: "0.8",
      },
    },
    {
      src: profileImg4,
      rating: 4,
      alt: "this is 4",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "5%",
        top: "85%",
        scale: "1",
      },
    },
    {
      src: profileImg5,
      rating: 5,
      alt: "this is 5",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "95%",
        top: "10%",
        scale: "1",
      },
    },
    {
      src: profileImg6,
      rating: 1,
      alt: "this is 6",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "78%",
        top: "35%",
        scale: "0.8",
      },
    },
    {
      src: profileImg7,
      rating: 2,
      alt: "this is 7",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "95%",
        top: "60%",
        scale: "0.6",
      },
    },
    {
      src: profileImg8,
      rating: 3,
      alt: "this is 8",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "78%",
        top: "85%",
        scale: "0.4",
      },
    },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>CLIENT THAT TRUST US </h3>
      <ImageCarousel list={dataList} />
    </div>
  );
}

/**
 * 
 * 

 */

/////////////////XXXXXXXXXXXXXXXXXXXXXXXXXX////////////////////////////
//XXXXXXXXXXXXXXXX Motion Slider Component XXXXXXXXXXXXXXXXXXXXXXXXX//
/////////////////XXXXXXXXXXXXXXXXXXXXXXXXXX////////////////////////////
/**
 * 
 * 

 */

// const images = [
//   "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
// ];

// import * as React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import styled from "styled-components";

// const variants = {
//   enter: {
//     x: 1000,
//     opacity: 0,
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: {
//     zIndex: 0,
//     x: -1000,
//     opacity: 0,
//   },
// };
// /**
//  * Experimenting with distilling swipe offset and velocity into a single variable, so the
//  * less distance a user has swiped, the more velocity they need to register as a swipe.
//  * Should accomodate longer swipes and short flicks without having binary checks on
//  * just distance thresholds and velocity > 0.
//  */
// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Styler = styled.div`
//   width: 100%;
//   height: 30rem;
//   overflow: hidden;
//   position: relative;
//   .example-container {
//     /* width: 100vw;
//     height: 100vh; */
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .next,
//   .prev {
//     top: calc(50% - 20px);
//     position: absolute;
//     background: white;
//     border-radius: 30px;
//     width: 40px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     user-select: none;
//     cursor: pointer;
//     font-weight: bold;
//     font-size: 18px;
//     z-index: 2;
//   }

//   .next {
//     background-color: ;
//     right: 10px;
//   }

//   .prev {
//     left: 10px;
//     transform: scale(-1);
//   }

//   img {
//     position: absolute;
//     max-width: 100vw;
//   }

//   .refresh {
//     padding: 10px;
//     position: absolute;
//     background: rgba(0, 0, 0, 0.4);
//     border-radius: 10px;
//     width: 20px;
//     height: 20px;
//     top: 10px;
//     right: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   }
// `;

// export default function Example() {
//   const [[page, direction], setPage] = useState([0, 0]);
//   console.log(page, direction);

//   // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
//   // then wrap that within 0-2 to find our image ID in the array below. By passing an
//   // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
//   // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
//   const imageIndex = wrap(0, images.length, page);

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <Styler>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           className="w-full h-full"
//           key={page}
//           src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           // drag="x"
//           // dragConstraints={{ left: 0, right: 0 }}
//           // dragElastic={1}
//           // onDragEnd={(e, { offset, velocity }) => {
//           //   const swipe = swipePower(offset.x, velocity.x);

//           //   if (swipe < -swipeConfidenceThreshold) {
//           //     paginate(1);
//           //   } else if (swipe > swipeConfidenceThreshold) {
//           //     paginate(-1);
//           //   }
//           // }}
//         />
//       </AnimatePresence>
//       <div className="next" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//       <div className="prev" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//     </Styler>
//   );
// }
