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
        name: "Finance Tracker",
        path: "",
        iconName: "banknote",
      },
      {
        id: 3,
        name: "Personal",
        path: "/private/finance-tracker/personal",
        iconName: "",
        parentId: 2,
      },
      {
        id: 4,
        name: "Family",
        path: "/private/finance-tracker/family",
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
