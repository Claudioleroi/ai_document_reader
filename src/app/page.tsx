import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Link } from "lucide-react";

export default  async function Home() {
  const {userId} = await  auth()

  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 flex justify-center items-center">
      <div className=" flex flex-col items-center text-center">
        <h1 className="text-white  text-3xl mr-4 font-semibold">
          ai document reader 
        </h1>
        <UserButton afterSignOutUrl='/'/>
        <div className="mt-2  flex">

          {isAuth && ( <Button>Discutons !</Button>

       
)}  
        </div> 
        <p className="text-slate-200 mt-2">Customise ton ai et obtient ton assistant personnel</p>
         <div className="flex w-full mt-4">
            {isAuth ?( <h1> upload</h1> ):
            (
              <Link href='/sign-in'><Button> Q&apos;est-ce qu&apos;on attends ? Connectez - vous !</Button>   
              </Link>
            )}
         </div>
      </div>
    </div>
  );
}
