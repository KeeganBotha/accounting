-- CreateTable
CREATE TABLE "member" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "identity_number" INTEGER NOT NULL,
    "cell" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "has_paid" BOOLEAN NOT NULL DEFAULT false,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);
