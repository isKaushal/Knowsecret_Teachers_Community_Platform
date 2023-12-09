export default function Section({ children, className, style }) {
  return (
    <div
      // className={`${className} w-full my-14 py-10  `}
      style={{ ...style }}
    >
      {/* <div className="  xl:w-[1280px] lg:w-[1024px] w-full mx-auto px-8  "> */}
      {children}
      {/* </div> */}
    </div>
  );
}
