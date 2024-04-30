-- CreateTable
CREATE TABLE "recyclingPoints" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "recyclingPoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "point_items" (
    "id" TEXT NOT NULL,
    "recyclingPointId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "point_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "point_items" ADD CONSTRAINT "point_items_recyclingPointId_fkey" FOREIGN KEY ("recyclingPointId") REFERENCES "recyclingPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_items" ADD CONSTRAINT "point_items_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
