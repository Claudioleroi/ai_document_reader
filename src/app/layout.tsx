import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ai document reader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>  
        <html lang="en">
      <body className={inter.className}>{children}
      <SignedOut>
         <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> 
      </body>
    </html>
</ClerkProvider>
  );
}
