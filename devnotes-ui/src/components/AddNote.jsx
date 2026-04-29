function AddNote({ content, setContent, onAdd }) {
    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <input
                className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a note"
            />
            <button
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 active:scale-[0.99]"
                onClick={onAdd}
            >
                Add Note
            </button>
        </div>
    );
}

export default AddNote;
