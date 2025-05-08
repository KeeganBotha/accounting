import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.sideMenu.createMany({
    data: [
      {
        id: 1,
        name: "Home",
        path: "/private/home",
        iconName: "house",
      },
      {
        id: 2,
        name: "Accounting",
        path: "",
        iconName: "banknote",
      },
      {
        id: 3,
        name: "Ledgers",
        path: "/private/accounting/ledgers",
        iconName: "",
        parentId: 2,
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
