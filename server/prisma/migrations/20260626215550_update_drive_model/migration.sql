/*
  Warnings:

  - Added the required column `applicationDeadline` to the `Drive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobType` to the `Drive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Drive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Drive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drive" ADD COLUMN     "applicationDeadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "jobType" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "salary" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'OPEN';
