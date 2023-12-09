import styled from "styled-components";

const InputStyles = styled.div`
  /* & > input::placeholder {
    color: white;
  } */
`;

export default function InputFeild({
  type = "text",
  placeholder = "Enter Here",
  label = "",
  name = "",
  onChange,
  padding = "1rem",
  ...rest
}) {
  return (
    <InputStyles className="xl:w-[40%]  lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-center items-center ">
      <h2 className="text-white">{label}</h2>
      <input
        {...rest}
        autoComplete="off"
        className="h-[3rem] rounded-md outline-none p-4 w-full m-1 text-gray-400 bg-[rgba(255,255,255,0.5)]"
        style={{ padding: padding }}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </InputStyles>
  );
}
