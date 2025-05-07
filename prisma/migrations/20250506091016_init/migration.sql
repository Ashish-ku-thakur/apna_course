/*
  Warnings:

  - You are about to drop the column `paymentId` on the `EnrolledCourse` table. All the data in the column will be lost.
  - Changed the type of `status` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "EnrolledCourse" DROP CONSTRAINT "EnrolledCourse_paymentId_fkey";

-- AlterTable
ALTER TABLE "EnrolledCourse" DROP COLUMN "paymentId";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
