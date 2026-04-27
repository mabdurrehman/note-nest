// const noteController = require("./src/controllers/noteController");

// const command = process.argv[2];
// const argument = process.argv[3];
// const args = process.argv.slice(2);

// async function main() {
//     switch (command) {
//         case "add":
//             await noteController.add(argument);
//             break;

//         case "list":
//             await noteController.list();
//             break;

//         case "view":
//             await noteController.view(argument);
//             break;

//         case "update":
//             await noteController.update(args[1], args.slice(2).join(" "));
//             break;

//         case "delete":
//             await noteController.remove(argument);
//             break;

//         default:
//             console.log("Unknown command");
//     }
// }

// main();
// ============== COMMANDs ==============
// node app.js add "Learn Node"
// node app.js list
// node app.js view 1
// node app.js delete 1
// node app.js update 1 "New content"
// ============================================================================
// =========== To run CLI version uncomment above and comment below ===========
// ============================================================================

const express = require("express");
const noteRoutes = require("./src/routes/noteRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const cors = require("cors");

const app = express();

app.use(express.json()); // parse JSON body
app.use(cors());

// health check
app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

// routes
app.use("/api", noteRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// global error handler
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
