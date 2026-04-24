const { readNotes, writeNotes } = require("../utils/fileHelper");

function generateId(notes) {
    return notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1;
}

async function addNote(content) {
    const notes = await readNotes();

    const newNote = {
        id: generateId(notes),
        content,
        created_at: new Date().toISOString()
    };

    notes.push(newNote);
    await writeNotes(notes);

    return newNote;
}

async function updateNote(id, content) {
    const notes = await readNotes();

    const index = notes.findIndex(n => n.id === Number(id));

    if (index === -1)
        return null;

    notes[index].content = content;
    await writeNotes(notes);

    return notes[index];
}

async function getAllNotes() {
    return await readNotes();
}

async function getNoteById(id) {
    const notes = await readNotes();
    return notes.find(n => n.id === Number(id));
}

async function deleteNote(id) {
    const notes = await readNotes();
    const filtered = notes.filter(n => n.id !== Number(id));

    if (notes.length === filtered.length) {
        return false; // nothing deleted
    }

    await writeNotes(filtered);
    return true;
}

module.exports = {
    addNote,
    updateNote,
    getAllNotes,
    getNoteById,
    deleteNote
};
