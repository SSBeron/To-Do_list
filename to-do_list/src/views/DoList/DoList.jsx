import Title from "./components/Title";
import AddNote from "./components/AddNote";
import ListItem from "./components/ListItem";
import { useState } from "react";

const DoList = () => {
  const [notes, setNotes] = useState([
    { note: "create more bugs", completed: false },
    { note: "sleep", completed: true },
  ]);
  return (
    <section className="flex-col w-3/5 h-3/5 p-3 border-2 bg-zinc-300 rounded-md shadow-2xl max-w-xl">
      <Title />

      <AddNote />

      {notes.map((noteObject, i) => (
        <ListItem
          key={i}
          note={noteObject.note}
          completed={noteObject.completed}
        />
      ))}
    </section>
  );
};

export default DoList;
