"use client";
import React, { useState } from "react";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/lib/prismadb";

//check db for user profile, if no profile show create profile comp and have user fill in info to create profile.
const { userId } = auth();
const [onboarded, setOnboarded] = useState(false);
//query db for user
const user = await prismadb.user.findUnique({
  where: {
    clerkId: userId,
  },
});

// may need to be in useeffect.
// if user .....set onBoarded (false)
if (!user) {
  //sets to false to show onboard comp.
  setOnboarded(false);
} else {
  setOnboarded(true);
}

const page = () => {
  //if no profile send to create profile page
  if (!onboarded) return <CreateProfile />;
  //if user profile exist display content.
  return <div className="text-zinc-900">DASHBOARD FOR LOGGED IN USER</div>;
};

export default page;
