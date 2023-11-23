import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import uuid from "react-uuid";

export default function AddNote({ setNotesProp }) {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e);
  };
  const handleClick = () => {
    if (text !== "") {
      setNotesProp((prev) => [
        ...prev,
        { id: uuid(), note: text, completed: false },
      ]);
      setText("");
    }
  };
  return (
    <div className="flex justify-between items-center space-x-2 m-4 pb-2 border-dashed border-b-2 border-black mb-5">
      <div className="flex w-full">
        <input
          value={text}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.value = "";
              handleClick();
            }
          }}
          onChange={(e) => handleInputChange(e.target.value)}
          className="m-1 pt-2 pl-2 w-full  rounded-lg bg-transparent hover:bg-gray-200 active:border-hidden normal-case"
          type="text"
          placeholder="Add note"
        />
      </div>
      <div className="flex-col justify-center  rounded-md bg-zinc-100 hover:bg-white active:bg-white pt-1.5">
        <button
          onClick={() => handleClick()}
          className="w-8 h-4 active:text-green-600"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
