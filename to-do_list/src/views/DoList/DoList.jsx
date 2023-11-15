import Title from "./components/Title";
import AddNote from "./components/AddNote";
import ListItem from "./components/ListItem";
import { useState } from "react";
import NextPage from "./components/NextPage";

const DoList = () => {
  const [notes, setNotes] = useState([
    { note: "create more bugs", completed: false },
    { note: "sleep", completed: true },
  ]);
  return (
    <section className="flex flex-col w-3/5 bg-zinc-300 rounded-lg shadow-2xl max-w-xl min-h-[500px] justify-between">
      <div className="flex flex-col">
        <Title />
        <AddNote setNotesProp={setNotes} />
        {notes.map((noteObject, i) => (
          <ListItem
            key={i}
            note={noteObject.note}
            completed={noteObject.completed}
          />
        ))}
      </div>
      <div className="flex justify-end overflow-hidden">
        <NextPage />
      </div>
    </section>
  );
};

export default DoList;
