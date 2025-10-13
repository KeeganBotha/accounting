/*
  Warnings:

  - You are about to drop the `account_record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `account_record_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "account_record" DROP CONSTRAINT "account_record_accountId_fkey";

-- DropForeignKey
ALTER TABLE "account_record" DROP CONSTRAINT "account_record_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "account_record" DROP CONSTRAINT "account_record_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "account_record_type" DROP CONSTRAINT "account_record_type_createdBy_fkey";

-- DropTable
DROP TABLE "account_record";

-- DropTable
DROP TABLE "account_record_type";

-- DropTable
DROP TABLE "member";

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

    CONSTRAINT "transaction_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction_category_group" ADD CONSTRAINT "transaction_category_group_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_category" ADD CONSTRAINT "transaction_category_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
