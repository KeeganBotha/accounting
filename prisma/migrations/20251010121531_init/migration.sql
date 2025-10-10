/*
  Warnings:

  - You are about to drop the column `accountRecordTypeId` on the `account_record` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "account_record" DROP CONSTRAINT "account_record_accountRecordTypeId_fkey";

-- AlterTable
ALTER TABLE "account_record" DROP COLUMN "accountRecordTypeId";
