function AddNote({ content, setContent, onAdd }) {
    return (
        <div className="flex gap-2 mb-4">
            <input
                className="border p-2 flex-1 rounded"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a note"
            />
            <button
                className="bg-blue-500 text-white px-4 rounded"
                onClick={onAdd}
            >
                Add
            </button>
        </div>
    );
}

export default AddNote;
