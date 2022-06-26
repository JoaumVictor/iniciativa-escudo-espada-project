import React from "react";

export default function CreateAtributeBox({ classe, text, func }) {
  return (
    <label className={classe} htmlFor={text}>
      <p>{text}</p>
      <input onChange={func} name={text} type="text" />
      <input onChange={func} name={text} type="text" />
    </label>
  );
}
