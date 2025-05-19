/*
  Warnings:

  - Added the required column `createdBy` to the `account_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_type" ADD COLUMN     "createdBy" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "account_type" ADD CONSTRAINT "account_type_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
