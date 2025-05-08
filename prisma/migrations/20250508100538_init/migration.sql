-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "side_menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "side_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "side_menu_settings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sideMenuId" INTEGER NOT NULL,

    CONSTRAINT "side_menu_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "side_menu" ADD CONSTRAINT "side_menu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "side_menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "side_menu_settings" ADD CONSTRAINT "side_menu_settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "side_menu_settings" ADD CONSTRAINT "side_menu_settings_sideMenuId_fkey" FOREIGN KEY ("sideMenuId") REFERENCES "side_menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
