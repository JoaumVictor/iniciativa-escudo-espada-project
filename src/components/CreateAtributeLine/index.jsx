import React from "react";
import { CgRadioCheck, CgCheckO } from "react-icons/cg";

export default function CreateAtributeLine({
  classe,
  text,
  funcInput,
  funcCheck,
}) {
  const [state, setState] = React.useState(false);
  const handleState = () => {
    funcCheck(!state);
    setState(!state);
  };

  return (
    <label className={classe} htmlFor={text}>
      <button name={text} onClick={handleState}>
        {state ? <CgCheckO /> : <CgRadioCheck />}
      </button>
      <input name={text} onChange={funcInput} type="text" />
      <p>{text}</p>
    </label>
  );
}
