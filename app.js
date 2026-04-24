const noteController = require("./src/controllers/noteController");

const command = process.argv[2];
const argument = process.argv[3];
const args = process.argv.slice(2);

async function main() {
    switch (command) {
        case "add":
            await noteController.add(argument);
            break;

        case "list":
            await noteController.list();
            break;

        case "view":
            await noteController.view(argument);
            break;

        case "update":
            await noteController.update(args[1], args.slice(2).join(" "));
            break;

        case "delete":
            await noteController.remove(argument);
            break;

        default:
            console.log("Unknown command");
    }
}

main();