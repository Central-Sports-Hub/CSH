"use client";
import React, { useState, useEffect } from "react";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/lib/prismadb";
import CreateProfile from "@/components/CreateProfile";

const page = () => {
  const [onboarded, setOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userId } = auth();

  useEffect(() => {
    if (!userId) return;

    const getUser = async () => {
      try {
        const user = await prismadb.user.findUnique({
          where: {
            clerkId: userId,
          },
        });

        setOnboarded(!!user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  if (!onboarded) return <CreateProfile />;

  return <div className="text-zinc-900">DASHBOARD FOR LOGGED IN USER</div>;
};

export default page;