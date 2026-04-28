function AddNote({ content, setContent, onAdd }) {
    return (
        <div>
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a note"
            />
            <button onClick={onAdd}>Add</button>
        </div>
    );
}

export default AddNote;
