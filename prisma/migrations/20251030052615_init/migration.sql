-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "side_menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "side_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "account_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "accountTypeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "is_shared" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_category_group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "transaction_category_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT,
    "createdBy" INTEGER NOT NULL,
    "transactionCategoryGroupId" INTEGER,

    CONSTRAINT "transaction_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "transactionCategoryId" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "side_menu" ADD CONSTRAINT "side_menu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "side_menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_type" ADD CONSTRAINT "account_type_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_accountTypeId_fkey" FOREIGN KEY ("accountTypeId") REFERENCES "account_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_category_group" ADD CONSTRAINT "transaction_category_group_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_category" ADD CONSTRAINT "transaction_category_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_category" ADD CONSTRAINT "transaction_category_transactionCategoryGroupId_fkey" FOREIGN KEY ("transactionCategoryGroupId") REFERENCES "transaction_category_group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_transactionCategoryId_fkey" FOREIGN KEY ("transactionCategoryId") REFERENCES "transaction_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
