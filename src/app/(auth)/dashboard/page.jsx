"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Page = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [onboarded, setOnboarded] = useState(false);
  const [userData, setUserData] = useState(null);

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

  return (
    <div className="text-zinc-900">
      {isLoaded && userId ? (
        <>
          <div>DASHBOARD FOR LOGGED IN USER</div>
          {userData && (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              {/* Display other user data as needed */}
            </div>
          )}
        </>
      ) : (
        <div>Please register or log in</div>
      )}
    </div>
  );
};

export default Page;
