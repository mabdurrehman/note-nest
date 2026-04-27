import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "./api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  async function loadNotes() {
    const res = await getNotes();
    setNotes(res.data);
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function handleAdd() {
    if (!content) return;

    await createNote(content);
    setContent("");
    loadNotes();
  }

  async function handleDelete(id) {
    await deleteNote(id);
    loadNotes();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>DevNotes</h1>

      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {n.content}
            <button onClick={() => handleDelete(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
