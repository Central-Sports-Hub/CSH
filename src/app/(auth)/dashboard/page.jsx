"use client";
import { useUser, useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { userId, getToken } = useAuth();
  const [userData, setUserData] = useState(null);
  let [userImg, setUserImg] = useState("");
  useEffect(() => {
    setUserImg(user?.imageUrl || "");
  }, [user]);

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
    const userIdMasked = "*****" + userId.slice(-5);

    return (
      <Row>
        <Container
          style={{
            marginTop: "43px",
            boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
            minHeight: "100%",
            fontSize: "1.5rem",
            background: "rgb(88, 88, 88)",
            color: "white",
            maxWidth: "40%",
            alignContent: "center",
            border: "3px solid grey",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <img
              style={{
                height: "150px",
                width: "auto",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              src={userImg}
              alt="User Image"
            />
          </Row>
          <p>
            <b style={{ textDecoration: "underline" }}>Full Name:</b>{" "}
            {user.fullName}
          </p>
          <p>
            <b style={{ textDecoration: "underline" }}>Email:</b>{" "}
            {user.emailAddresses[0].emailAddress}
          </p>
          <p>
            <b style={{ textDecoration: "underline" }}>UserID:</b>{" "}
            {userIdMasked}
          </p>{" "}
          {/* Display masked userId */}
          {userData && (
            <div>
              <p>Data from backend API:</p>
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
        </Container>
      </Row>
    );
  }

  return <div>Not signed in</div>;
};

export default Page;
