function errorHandler(err, req, res, next) {
    console.error(err); // keep full error in logs

    // Prisma validation error
    if (err.name === "PrismaClientValidationError") {
        return res.status(400).json({
            error: "Invalid request data",
        });
    }

    // Default
    res.status(500).json({
        error: "Internal Server Error",
    });
}

module.exports = errorHandler;