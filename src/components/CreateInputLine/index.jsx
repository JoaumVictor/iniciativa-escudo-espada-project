import React from "react";

export default function CreateInputLine({ classe, text, funcInput }) {
  return (
    <label className={classe} htmlFor={text}>
      <input name={text} onChange={funcInput} type="text" />
      <p>{text}</p>
    </label>
  );
}
