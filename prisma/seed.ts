import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const sideMenu = await prisma.sideMenu.createMany({
    data: [
      {
        name: "Home",
        path: "/private/home",
        iconName: "",
      },
      {
        name: "Ledgers",
        path: "/private/ledgers",
        iconName: "",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
