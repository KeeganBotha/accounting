import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        email: "system@system.com",
        lastLogin: new Date(),
      },
    ],
  });

  await prisma.sideMenu.createMany({
    data: [
      {
        id: 1,
        name: "Home",
        path: "/private/home",
        iconName: "House",
      },
      {
        id: 2,
        name: "Finance Tracker",
        path: "",
        iconName: "Banknote",
      },
      {
        id: 3,
        name: "Personal",
        path: "/private/finance-tracker/personal",
        iconName: "",
        parentId: 2,
      },
      {
        id: 5,
        name: "Settings",
        path: "/private/settings/account-options",
        iconName: "Settingss",
      },
      {
        id: 6,
        name: "Account Types",
        path: "/private/settings/account-type",
        iconName: "",
        parentId: 5,
      },
      {
        id: 7,
        name: "Transaction Categories",
        path: "/private/settings/transaction-category",
        iconName: "",
        parentId: 5,
      },
      {
        id: 8,
        name: "Transaction Category Group",
        path: "/private/settings/transaction-category-group",
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
        iconName: "Landmark",
        createdBy: 1,
      },
      {
        id: 2,
        name: "Savings",
        iconName: "PiggyBank",
        createdBy: 1,
      },
      {
        id: 3,
        name: "Credit",
        iconName: "CreditCard",
        createdBy: 1,
      },
      {
        id: 4,
        name: "Cash",
        iconName: "DollarSign",
        createdBy: 1,
      },
      {
        id: 5,
        name: "Investment",
        iconName: "TrendingUp",
        createdBy: 1,
      },
      {
        id: 6,
        name: "Loan",
        iconName: "FileText",
        createdBy: 1,
      },
      {
        id: 7,
        name: "Retirement",
        iconName: "Umbrella",
        createdBy: 1,
      },
    ],
  });

  await prisma.$executeRawUnsafe(`
  SELECT setval(pg_get_serial_sequence('"user"', 'id'), (SELECT COALESCE(MAX(id), 1) FROM "user"));
`);

  await prisma.$executeRawUnsafe(`
  SELECT setval(pg_get_serial_sequence('"side_menu"', 'id'), (SELECT COALESCE(MAX(id), 1) FROM "side_menu"));
`);

  await prisma.$executeRawUnsafe(`
  SELECT setval(pg_get_serial_sequence('"account_type"', 'id'), (SELECT COALESCE(MAX(id), 1) FROM "account_type"));
`);
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
