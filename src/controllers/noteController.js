const noteService = require("../services/noteService");

async function add(content) {
    if (!content) {
        console.log("❌ Please provide note content");
        return;
    }

    const note = await noteService.addNote(content);
    console.log("✅ Note added:", note);
}

async function list() {
    const notes = await noteService.getAllNotes();

    if (notes.length === 0) {
        console.log("No notes found");
        return;
    }

    console.log("📋 Notes:");
    notes.forEach(n => {
        console.log(`${n.id}: ${n.content}`);
    });
}

async function view(id) {
    if (!id) {
        console.log("❌ Please provide an ID");
        return;
    }
    const note = await noteService.getNoteById(id);

    if (!note) {
        console.log("❌ Note not found");
        return;
    }

    console.log("📄 Note:", note);
}

async function update(id, content) {
    if (!id || !content) {
        console.log("❌ Please provide ID and content");
        return;
    }

    const note = await noteService.updateNote(id, content);

    if (!note) {
        console.log("❌ Note not found");
        return;
    }

    console.log("✅ Note updated:", note);
}

async function remove(id) {
    if (!id) {
        console.log("❌ Please provide an ID");
        return;
    }
    const success = await noteService.deleteNote(id);

    if (!success) {
        console.log("❌ Note not found");
        return;
    }

    console.log("🗑️ Note deleted");
}

module.exports = { add, list, view, update, remove };
