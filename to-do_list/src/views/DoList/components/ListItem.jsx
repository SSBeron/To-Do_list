import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
  note,
  completed,
  handleDelete,
  handleEdit,
  id,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleInputChange = (e) => {
    setEditedNote(e.target.value);
  };

  const handleEditComplete = () => {
    handleEdit(id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row justify-between items-center rounded-md m-2 mx-4 bg-amber-50 last:mb-5">
      <div className="m-2 mx-3">
        {isEditing ? (
          <input
            type="text"
            value={editedNote}
            onChange={handleInputChange}
            onBlur={handleEditComplete}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditComplete();
              }
            }}
            autoFocus
          />
        ) : (
          <>
            {note}
            <FontAwesomeIcon
              onClick={() => setIsEditing(true)}
              className="mx-2 cursor-pointer hover:text-stone-500 active:text-sky-800"
              icon={faPencilAlt}
            />
          </>
        )}
      </div>
      <div className="flex flex-col">
        <input
          className="m-2 w-5 h-5 cursor-"
          type="checkbox"
          defaultChecked={completed}
        />
        <div
          onClick={() => handleDelete(id)}
          className="m-2 cursor-pointer hover:text-stone-500 active:text-amber-700"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}
