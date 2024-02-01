"use client";
import { useUser, useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { userId, getToken } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn) {
        const response = await axios.post("/api/user", { user: userId });
        const data = response.data;
        setUserData(data);
      }
    };

    fetchUserData();
  }, [isSignedIn, userId]);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    console.log("user:", user);
    const { firstName, lastName } = user;
    const userIdMasked = "*****" + userId.slice(-5); // Mask the userId

    return (
      <div>
        <p>Full Name: {user.fullName}!</p>
        <p>Email: {user.emailAddresses[0].emailAddress}</p>
        <p>UserID: {userIdMasked}</p> {/* Display masked userId */}
        {userData && (
          <div>
            <p>Data from backend API:</p>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }

  return <div>Not signed in</div>;
};

export default Page;
