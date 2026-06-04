import { useState } from "react";

function NoteItem({ note, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(note.content);
    const buttonBaseClass =
        "inline-flex h-10 min-w-24 items-center justify-center rounded-lg px-4 text-sm font-medium transition active:scale-[0.99]";

    function handleUpdate() {
        onUpdate(note.id, value);
        setEditing(false);
    }

    function handleDelete() {
        const confirmed = window.confirm("Are you sure you want to delete this note?");
        if (!confirmed) return;
        onDelete(note.id);
    }

    return (
        <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            {editing ? (
                <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                        className="w-full flex-1 rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <button
                            className={`${buttonBaseClass} bg-sky-600 text-white hover:bg-sky-700`}
                            onClick={handleUpdate}
                        >
                            Save
                        </button>
                        <button
                            className={`${buttonBaseClass} border border-slate-300 bg-white text-slate-700 hover:bg-slate-100`}
                            onClick={() => {
                                setValue(note.content);
                                setEditing(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-start justify-between gap-3">
                    <p className="whitespace-pre-wrap break-words text-slate-800">{note.content}</p>
                    <button
                        className={`${buttonBaseClass} bg-sky-600 text-white hover:bg-sky-700`}
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>
                </div>
            )}

            <div className="mt-3 flex justify-end">
                <button
                    className={`${buttonBaseClass} bg-red-500 text-white hover:bg-red-600`}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default NoteItem;
