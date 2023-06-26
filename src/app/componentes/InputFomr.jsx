export default function InputFomr({
  value,
  children,
  type,
  name,
  onChange,
  label,
  id,
  options,
}) {
  if (label == "select") {
    return (
      <label
        htmlFor={name}
        className="peer w- text-sm  py-1 mt-2 pl-4 focus:bg-transparent  bg-transparent shadow-none border rounded-lg p-2 text-primary-text  border-primary-100/50 outline-none  focus:outline-none relative"
      >
        {children}
        <select name={name} id="" onChange={onChange} className="ml-5 text-primary-text  bg-transparent ">
          {options?.map((option, i) => (
            <option key={i} value={option} className="p-1">
              {option}
            </option>
          ))}
        </select>
      </label>
    )
  }
  if (label == "date") {
    return (
      <div
        className={`flex flex-col text-sm items-start justify-between  w-1/3 relative py-2 `}
      >
        <label htmlFor={name} className="text-xs ">
          {children}
          <input
            onChange={onChange}
            type={type}
            name={name}
            id={name}
            value={value}
            required={true}
            className="peer w- py-1 pl-4 focus:bg-transparent  bg-transparent shadow-none border-0 border-b text-primary-text  border-primary-100/50 outline-none focus:outline-none relative z-10 valid:bg-transparent bg-"
          />
        </label>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col  items-start justify-between w-full relative py-2  animate-[aparecer_${
        id / 2
      }s]`}
    >
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        value={value}
        required={true}
        className="peer w-full py-1 pl-8 bg-transparent text-sm shadow-none border border-primary-100/50 rounded-md text-gray-500  outline-none focus:outline-none relative z-10 valid:bg-transparent"
      />
      {/* <FontAwesomeIcon icon={faIcon} className="text-gray-500 absolute left-0 bottom-3 h-2/6" />  */}
      <label
        htmlFor="email"
        className=" peer-focus:bg-primary-800 peer-focus:text-primary-text text-sm peer-focus:p-1 peer-focus:rounded-sm peer-focus:ml-2 peer-focus:-translate-y-5  peer-valid:bg-primary-800 peer-valid:text-primary-text  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:z-20 peer-focus:text-xs peer-valid:ml-2 peer-valid:z-20 peer-valid:-translate-y-5 duration-500 text-gray-500 absolute left-0 bottom-3 pl-4 "
      >
        {children}
      </label>
    </div>
  );
}
