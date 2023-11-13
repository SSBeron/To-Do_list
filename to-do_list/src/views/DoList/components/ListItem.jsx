import React from "react";

export default function ListItem({ note, completed }) {
  return (
    <div className="flex flex-row">
      <div className="m-2">{note}</div>
      <input type="checkbox" defaultChecked={completed} />
    </div>
  );
}
