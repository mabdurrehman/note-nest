import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "./api/notes";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { updateNote } from "./api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadNotes() {
    try {
      setLoading(true);
      setError(null);

      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function handleAdd() {
    if (!content) return;

    try {
      setLoading(true);
      await createNote(content);
      setContent("");
      await loadNotes();
    } catch (err) {
      setError("Failed to create note");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(id, content) {
    try {
      setLoading(true);
      await updateNote(id, content);
      await loadNotes();
    } catch {
      setError("Failed to update note");
    } finally {
      setLoading(false);
    }
  }
  async function handleDelete(id) {
    try {
      setLoading(true);
      await deleteNote(id);
      await loadNotes();
    } catch (err) {
      setError("Failed to delete note");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>DevNotes</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AddNote
        content={content}
        setContent={setContent}
        onAdd={handleAdd}
      />

      <NoteList
        notes={notes}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
