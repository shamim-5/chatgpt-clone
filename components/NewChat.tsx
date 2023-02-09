"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  // create a new entry to firebase/firestore
  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
    });
    console.log("doc.id:", doc.id);
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
