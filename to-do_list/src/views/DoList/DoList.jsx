import Title from "./components/Title";
import AddNote from "./components/AddNote";
import ListItem from "./components/ListItem";
import { useState } from "react";
import NextPage from "./components/NextPage";

const DoList = () => {
  const [notes, setNotes] = useState([
    { id: 1, note: "Create more bugs", completed: false },
    { id: 2, note: "Sleep", completed: true },
    { id: 3, note: "Wake up", completed: true },
  ]);

  const handleDelete = (id) => {
    const newArr = notes.filter((noteObj) => noteObj.id !== id);
    setNotes(newArr);
  };

  const handleEdit = (id, editedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, note: editedNote } : note
      )
    );
  };

  return (
    <section className="flex flex-col w-3/5 bg-zinc-300 rounded-lg shadow-2xl max-w-xl min-h-[500px] justify-between">
      <div className="flex flex-col ">
        <Title />
        <AddNote setNotesProp={setNotes} />
        {notes.map((noteObject, i) => (
          <ListItem
            key={i}
            note={noteObject.note}
            completed={noteObject.completed}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            id={noteObject.id}
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
