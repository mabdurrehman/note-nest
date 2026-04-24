function validateCreateNote(req, res, next) {
    const { content } = req.body;

    if (!content || typeof content !== "string") {
        return res.status(400).json({ error: "Content must be a string" });
    }

    next();
}

function validateUpdateNote(req, res, next) {
    const { content } = req.body;

    if (!content || typeof content !== "string") {
        return res.status(400).json({ error: "Content must be a string" });
    }

    next();
}

module.exports = {
    validateCreateNote,
    validateUpdateNote,
};
