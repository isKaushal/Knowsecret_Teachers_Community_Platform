import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useState } from "react";

// icons
import { ArrowLeft, ArrowRight } from "./icons";

//  imges
import { PlcHolderYellow } from "./images";

const reducer = (state, action) => {
  switch (action.type) {
    case "previous": {
      const { index, list } = state;

      let IndexUpdater = 0;

      if (index === 0) {
        IndexUpdater = list.length - 1;
      } else {
        IndexUpdater = index - 1;
      }

      return {
        ...list[IndexUpdater],
        list: state.list,
        index: IndexUpdater,
        AwardName: list[IndexUpdater].AwardName,
        AwardYear: list[IndexUpdater].AwardYear,
        direction: "left",
      };
    }

    case "next": {
      const { index, list } = state;
      let IndexUpdater = 0;
      if (index === list.length - 1) {
        IndexUpdater = 0;
      } else {
        IndexUpdater = index + 1;
      }

      return {
        ...list[IndexUpdater],
        list: state.list,
        index: IndexUpdater,
        AwardName: list[IndexUpdater].AwardName,
        AwardYear: list[IndexUpdater].AwardYear,
        direction: "right",
      };
    }

    default:
      state;
  }
};

const MainComponent = ({ list }) => {
  const [StopImageschange, setStopImageschange] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    list: list,
    index: 0,
    AwardName: list[0].AwardName,
    AwardYear: list[0].AwardYear,
    direction: "right",
  });

  const Previous = () => {
    dispatch({ type: "previous" });
  };

  const Next = () => {
    dispatch({ type: "next" });
  };

  const StopImages = () => {
    setStopImageschange(true);
  };

  const ContinueImages = () => {
    setStopImageschange(false);
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      if (StopImageschange === false) {
        Next();
      }
    }, 5000);

    return () => clearInterval(intervel);
  });

  const Variants = {
    enter: {
      x: state.direction === "right" ? 1000 : -1000,
      opacity: 0,
      zIndex: 0,
    },

    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },

    exit: {
      x: state.direction === "right" ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    },
  };
  return (
    <div className="w-full  h-[20rem] overflow-hidden flex justify-center items-center ">
      <div className="flex w-full h-full relative justify-center items-center">
        <button
          className="absolute left-4 z-10 text-[#ff9d00] text-3xl font-semibold"
          onClick={() => {
            Previous();
          }}
        >
          <ArrowLeft />
        </button>
        <AnimatePresence initial={false}>
          <motion.div
            className="absolute w-[50%]"
            key={state.index}
            variants={Variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", damping: 17 }}
            onMouseEnter={StopImages}
            onMouseLeave={ContinueImages}
            // drag="x"
            // onDragEnd={Next}
            // dragConstraints={{ left: 0, right: 0 }}
          >
            <div className="text-center w-full h-full text-white lg:px-[10%] bg-[#2c2c2c] p-6 rounded-lg shadow-2xl  ">
              <div className="awards-image-wrap flex w-full justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-white mb-2 overflow-hidden">
                  <Image
                    src={PlcHolderYellow}
                    width={100}
                    height={100}
                    alt="awrds"
                    style={{ aspectRatio: "1/1" }}
                    quality={100}
                  />
                  ;
                </div>
              </div>
              <h1>
                {state.AwardYear}
                <br />
                {state.AwardName}
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute right-4 z-10 text-[#ff9d00] text-3xl font-semibold"
          onClick={() => {
            Next();
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default function Playground({ list }) {
  list = list.map((value, index) => {
    return {
      ...value,
      index: index,
    };
  });

  return <MainComponent list={list} />;
}
