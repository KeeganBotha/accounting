-- CreateTable
CREATE TABLE "account_record_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "account_record_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_record" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "accountRecordTypeId" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "account_record_type" ADD CONSTRAINT "account_record_type_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_record" ADD CONSTRAINT "account_record_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_record" ADD CONSTRAINT "account_record_accountRecordTypeId_fkey" FOREIGN KEY ("accountRecordTypeId") REFERENCES "account_record_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
