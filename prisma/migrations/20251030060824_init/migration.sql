-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_transactionCategoryId_fkey";

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "transactionCategoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_transactionCategoryId_fkey" FOREIGN KEY ("transactionCategoryId") REFERENCES "transaction_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
