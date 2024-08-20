import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

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
      </div>
    </div>
  );
}
