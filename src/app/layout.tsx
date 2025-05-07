'use server'
import "./globals.css";
import { ThemeProvider } from "@/components/theam-provider";
import Navbar from "@/components/home/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma-client";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  const user = await currentUser()

  if (!user) {
    return <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <head />
          <body>

            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>

          </body>
        </html>
      </ClerkProvider>
    </>
  }

  let findUser
  findUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id
    }
  })

  if (!findUser) {
    findUser =await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName as string,
        imageurl: user.imageUrl
      }
    })
  }

  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <head />
          <body>

            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>

          </body>
        </html>
      </ClerkProvider>

    </>
  );
}

export default RootLayout
