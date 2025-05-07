// utils/prisma.ts

import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function connectWithRetry(retries = 5, delay = 1000): Promise<void> {
  for (let i = 0; i < retries; i++) {
    try {
      await prisma.$connect();
      console.log("✅ Prisma connected to DB");
      return;
    } catch (error) {
      console.log(`❌ Prisma connection failed. Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("❌ Could not connect to database after retries");
}

connectWithRetry();

export default prisma;
