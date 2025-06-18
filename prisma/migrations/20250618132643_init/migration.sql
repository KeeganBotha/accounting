/*
  Warnings:

  - Added the required column `createdBy` to the `account_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `account_record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_record" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "updatedBy" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "account_record" ADD CONSTRAINT "account_record_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_record" ADD CONSTRAINT "account_record_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
