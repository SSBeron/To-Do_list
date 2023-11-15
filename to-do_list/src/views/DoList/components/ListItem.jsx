import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({ note, completed }) {
  return (
    <div className="flex flex-row justify-between rounded-md m-2 mx-5 pb-[25px] bg-amber-50 hover:bg-white underline last:mb-5">
      <div className="m-2 items-center">{note}</div>
      <div className="flex">
        <input className="m-2 w-5" type="checkbox" defaultChecked={completed} />
        <div>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}
