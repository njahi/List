/*
  Warnings:

  - You are about to alter the column `value` on the `Asset` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "value" SET DATA TYPE INTEGER;
