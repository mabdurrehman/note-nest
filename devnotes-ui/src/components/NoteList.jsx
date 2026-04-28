import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onUpdate }) {
    return (
        <ul>
            {notes.map((n) => (
                <NoteItem
                    key={n.id}
                    note={n}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}
export default NoteList;
