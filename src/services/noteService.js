const prisma = require("../utils/prismaClient");

async function addNote(content) {
    return await prisma.note.create({
        data: { content },
    });
}

async function getAllNotes() {
    return await prisma.note.findMany({
        orderBy: { created_at: "desc" },
    });
}

async function getNoteById(id) {
    return await prisma.note.findUnique({
        where: { id: Number(id) },
    });
}

async function updateNote(id, content) {
    try {
        return await prisma.note.update({
            where: { id: Number(id) },
            data: { content },
        });
    } catch (err) {
        return null; // not found
    }
}

async function deleteNote(id) {
    try {
        await prisma.note.delete({
            where: { id: Number(id) },
        });
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    addNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};

// const { readNotes, writeNotes } = require("../utils/fileHelper");

// function generateId(notes) {
//     return notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1;
// }

// async function addNote(content) {
//     const notes = await readNotes();

//     const newNote = {
//         id: generateId(notes),
//         content,
//         created_at: new Date().toISOString()
//     };

//     notes.push(newNote);
//     await writeNotes(notes);

//     return newNote;
// }

// async function updateNote(id, content) {
//     const notes = await readNotes();

//     const index = notes.findIndex(n => n.id === Number(id));

//     if (index === -1)
//         return null;

//     notes[index].content = content;
//     await writeNotes(notes);

//     return notes[index];
// }

// async function getAllNotes() {
//     return await readNotes();
// }

// async function getNoteById(id) {
//     const notes = await readNotes();
//     return notes.find(n => n.id === Number(id));
// }

// async function deleteNote(id) {
//     const notes = await readNotes();
//     const filtered = notes.filter(n => n.id !== Number(id));

//     if (notes.length === filtered.length) {
//         return false; // nothing deleted
//     }

//     await writeNotes(filtered);
//     return true;
// }

// module.exports = {
//     addNote,
//     updateNote,
//     getAllNotes,
//     getNoteById,
//     deleteNote
// };
