"use client";

import { useSession, signOut } from "next-auth/react";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();

  // get collection data from firebase/firestore
  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session?.user?.email!, "chats"), orderBy("createdAt", "asc"))
  );

  // console.log("[Get firestore all chat data:]", chats?.docs);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />

        <div className="hidden sm:inline">
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          {loading && <div className="animate-pulse text-center text-white">Loading...</div>}

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div onClick={() => signOut()} className="cursor-pointer ">
          <img
            src={session.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`}
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
