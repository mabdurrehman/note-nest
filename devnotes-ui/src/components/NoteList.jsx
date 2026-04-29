import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onUpdate }) {
    if (!notes.length) {
        return (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                <p className="text-sm text-slate-500">No notes yet. Add your first one above.</p>
            </div>
        );
    }

    return (
        <ul className="space-y-3">
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
