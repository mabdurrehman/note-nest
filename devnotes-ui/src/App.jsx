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
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">NoteNest</h1>
          <p className="mt-1 text-sm text-slate-500">
            Your calm space for ideas, reminders, and daily notes.
          </p>
        </div>

        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            {error}
          </p>
        )}
        {loading && (
          <p className="mb-4 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
            Loading...
          </p>
        )}

        <AddNote content={content} setContent={setContent} onAdd={handleAdd} />

        <NoteList notes={notes} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}

export default App;
