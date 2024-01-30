/*
  Warnings:

  - Added the required column `sport` to the `Venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venues" ADD COLUMN     "sport" TEXT NOT NULL;
