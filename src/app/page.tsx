import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 flex justify-center items-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex">
          <h1 className="text-white text-3xl mr-4 font-semibold">
            ai document reader
          </h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="mt-2 flex">
          {isAuth && <Button className="ml-1 mb-3">Discutons !</Button>}
        </div>
        <p className="text-slate-200 mt-2">
          Customise ton <code>AI</code> et obtient ton assistant personnel
        </p>
        <div className="flex w-full mt-4">
          {isAuth ? (
            <h1>Uploadfile</h1>
          ) : (
            <Link href="/sign-in">
              <Button className="ml-4">
                Qu&apos;est-ce qu&apos;on attends ? Connectez-vous !
                <LogIn className="w-4 h-4 ml-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
