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
      {
        id: 5,
        name: "Settings",
        path: "/private/settings/account-options",
        iconName: "settingss",
      },
      {
        id: 6,
        name: "Account Options",
        path: "/private/settings/account-options",
        iconName: "",
        parentId: 5,
      },
    ],
  });

  await prisma.accountType.createMany({
    data: [
      {
        id: 1,
        name: "Current",
        iconName: "landmark",
        isSystem: true,
      },
      {
        id: 2,
        name: "Savings",
        iconName: "piggyBank",
        isSystem: true,
      },
      {
        id: 3,
        name: "Credit",
        iconName: "creditCard",
        isSystem: true,
      },
      {
        id: 4,
        name: "Cash",
        iconName: "dollarSign",
        isSystem: true,
      },
      {
        id: 5,
        name: "Investment",
        iconName: "trendingUp",
        isSystem: true,
      },
      {
        id: 6,
        name: "Loan",
        iconName: "fileText",
        isSystem: true,
      },
      {
        id: 7,
        name: "Retirement",
        iconName: "umbrella",
        isSystem: true,
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
