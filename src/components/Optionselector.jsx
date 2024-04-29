import React from "react";

const Optionselector = ({ handler, data, title }) => {
  return (
    <div>
      <select
        onChange={handler}
        className="bg-primaryClr rounded-md p-1 outline-none border border-secndryClr"
      >
        <option value={title}>{title}</option>
        {data.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Optionselector;
