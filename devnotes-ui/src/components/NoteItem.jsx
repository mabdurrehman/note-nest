import { useState } from "react";

function NoteItem({ note, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(note.content);

    function handleUpdate() {
        onUpdate(note.id, value);
        setEditing(false);
    }

    return (
        <li>
            {editing ? (
                <>
                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    {note.content}
                    <button onClick={() => setEditing(true)}>Edit</button>
                </>
            )}

            <button onClick={() => onDelete(note.id)}>Delete</button>
        </li>
    );
}

export default NoteItem;
