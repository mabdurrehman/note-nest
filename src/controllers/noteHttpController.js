const noteService = require("../services/noteService");

async function getAll(req, res) {
    const notes = await noteService.getAllNotes();
    res.json(notes);
}

async function getOne(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID required" });
    }

    const note = await noteService.getNoteById(id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
}

async function create(req, res) {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: "Content required" });
    }

    const note = await noteService.addNote(content);

    res.status(201).json(note);
}

async function remove(req, res) {
    const { id } = req.params;

    const success = await noteService.deleteNote(id);

    if (!success) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Deleted successfully" });
}

async function update(req, res) {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: "Content required" });
    }

    const note = await noteService.updateNote(id, content);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
}

module.exports = {
    getAll,
    getOne,
    create,
    remove,
    update
};
