function AddNote({ content, setContent, onAdd }) {
    const buttonBaseClass =
        "inline-flex h-10 min-w-24 items-center justify-center rounded-lg px-4 text-sm font-medium transition active:scale-[0.99]";

    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <input
                className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a note"
            />
            <button
                className={`${buttonBaseClass} bg-sky-600 text-white hover:bg-sky-700`}
                onClick={onAdd}
            >
                Add Note
            </button>
        </div>
    );
}

export default AddNote;
