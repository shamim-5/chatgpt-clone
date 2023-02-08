"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />

        <div>{/* modelSelection  */}</div>

        {/* map through the chatRows  */}
      </div>

      {session && (
        <div onClick={() => signOut()} className="cursor-pointer ">
          <img
            src={session.user?.image!}
            alt="Profile pic"
            className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50"
          />
          <p className="text-white text-center">SignOut</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
