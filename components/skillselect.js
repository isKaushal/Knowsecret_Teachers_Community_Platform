function InputCheck({
  placeholder = "Enter Here",
  label = "",
  name = "",
  id = "",
  className = "",
  key = "",
  onChange,
}) {
  return (
    <div className="flex justify-between items-center w-full  ">
      <label htmlFor={id} className="text-white text-lg flex items-center  ">
        <h1>{label}</h1>
        <input
          type="checkbox"
          placeholder={placeholder}
          name={name}
          key={key}
          className={className}
          id={id}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

function SkillSelect({ id, onChange, name, defaultValue }) {
  return (
    <div className="w-full">
      <select
        defaultValue={defaultValue}
        name={name}
        id={id}
        onChange={onChange}
        className="h-[2.5rem] px-4  rounded-md outline-none  m-1 w-full  bg-white "
      >
        <option value="--Select--">--Select Rating--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default function SkillsSelect({ data, updater, index, filter }) {
  return (
    <div className="flex justify-between">
      <InputCheck
        id={data.SkillName}
        name={data.SkillName}
        label={data.SkillName}
        className="m-4 "
        checked={data.value}
        onChange={(event) => {
          filter.length <= 5
            ? updater(index, { ...data, value: event.target.checked })
            : updater(index, {
                ...data,
                value: (event.target.checked = false),
              });
        }}
      />
      {data.value === true ? (
        <SkillSelect
          defaultValue={data.value}
          onChange={(event) => {
            updater(index, { ...data, rating: event.target.value });
          }}
        />
      ) : null}
    </div>
  );
}
