import React from "react";
import S from "./style.module.scss";

export default function CreateInputLabel({ name, text, func, classe }) {
  return (
    <label htmlFor={name} className={classe}>
      <p>{text}</p>
      <input type="text" name={name} onChange={func} />
    </label>
  );
}
