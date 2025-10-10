/*
  Warnings:

  - Added the required column `description` to the `account_record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_record" ADD COLUMN     "description" TEXT NOT NULL;
