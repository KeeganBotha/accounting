/*
  Warnings:

  - Added the required column `isActive` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "isActive" BOOLEAN NOT NULL;
