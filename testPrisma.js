const prisma = require("./src/utils/prismaClient");

async function test() {
  const notes = await prisma.note.findMany();
  console.log(notes);
}

test();