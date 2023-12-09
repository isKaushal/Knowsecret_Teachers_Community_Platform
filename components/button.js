import Buttonstyle from "../styles/Button.module.css";

export default function BUTTONS({
  label = "Button",
  onclick,
  type = "",
  height = "4rem",
  width = "15rem",
  ...rest
}) {
  if (type === "submit") {
    return (
      <div {...rest} className={Buttonstyle.buttonWrap}>
        <button
          className={Buttonstyle.buttonWrapInner}
          style={{ width: width, height: height }}
        >
          <a
            type={type}
            className={Buttonstyle.button}
            style={{ width: width, height: height }}
          >
            <i className={Buttonstyle.btnCurve}></i>
            <span className={Buttonstyle.btn}>Submit</span>
          </a>
        </button>
      </div>
    );
  } else {
    return (
      <div className={Buttonstyle.buttonWrap}>
        <div
          className={Buttonstyle.buttonWrapInner}
          style={{ width: width, height: height }}
        >
          <a
            onClick={onclick}
            type={type}
            className={Buttonstyle.button}
            style={{ width: width, height: height }}
          >
            <i className={Buttonstyle.btnCurve}></i>
            <span className={Buttonstyle.btn}>{label}</span>
          </a>
        </div>
      </div>
    );
  }
}
