/*
  Warnings:

  - Added the required column `transactionCategoryId` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "transactionCategoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transaction_category" ADD COLUMN     "transactionCategoryGroupId" INTEGER;

-- AddForeignKey
ALTER TABLE "transaction_category" ADD CONSTRAINT "transaction_category_transactionCategoryGroupId_fkey" FOREIGN KEY ("transactionCategoryGroupId") REFERENCES "transaction_category_group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_transactionCategoryId_fkey" FOREIGN KEY ("transactionCategoryId") REFERENCES "transaction_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
