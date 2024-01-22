"use client";
import { useUser, useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useEffect } from "react";

const page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { userId, getToken } = useAuth();
  const [userData, setUserData] = useState(null);

  console.log("USER:", user);

  useEffect(() => {
    if (isLoaded && userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.post(`/api/test/user/`, { userId });
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, [isLoaded, userId]);

  if (isSignedIn) {
    return (
      <div>
        <p>Full Name: {user.fullName}!</p>
        <p>Email: {user.emailAddresses[0].emailAddress}</p>
        <p>UserID: {userId}</p>
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

export default page;
