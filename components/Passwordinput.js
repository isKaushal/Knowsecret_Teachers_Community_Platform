import { useState } from "react";

// icons
import { EyeOff, Eyeopen } from "./icons";

// styles
import styles from "../styles/Login.module.css";

export default function Inputpassword({
  placeholder = "Enter Here",
  label = "",
  name = "",
}) {
  let [inputType, setInputType] = useState("password");

  const revelpassword = () => {
    setInputType((preState) => {
      if (preState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };
  return (
    <div className="w-full ">
      <label className={styles.label}>
        {label}
        <div className=" flex  w-full justify-between mt-1 ">
          <input
            className=" h-[3rem] w-full  rounded-md outline-none p-4 bg-black "
            type={inputType}
            placeholder={placeholder}
            name={name}
          />
          <button
            type="button"
            className="bg-[#ff9d00] text-white py-3 px-5 cursor-pointer  rounded-md ml-1 "
            onClick={revelpassword}
          >
            {inputType === "password" ? (
              <EyeOff className="scale-[1.2]" />
            ) : (
              <Eyeopen className="scale-[1.2]" />
            )}
          </button>
        </div>
      </label>
    </div>
  );
}
