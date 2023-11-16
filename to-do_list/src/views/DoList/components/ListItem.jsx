import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({ note, completed, handleDelete, id }) {
  return (
    <div className="flex flex-row justify-between items-center rounded-md m-2 mx-4 bg-amber-50 last:mb-5">
      <div className="m-2 mx-3">{note}</div>
      <div className="flex flex-col">
        <input
          className="m-2 w-5 h-5 cursor-"
          type="checkbox"
          defaultChecked={completed}
        />
        <div
          onClick={() => handleDelete(id)}
          className="m-2 cursor-pointer hover:text-stone-500 "
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}
