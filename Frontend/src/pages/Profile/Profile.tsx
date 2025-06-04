import React from "react";
import { useState, useContext } from "react";
import Requests from "../../components/Requests";
import { SessionContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [loading, setLoading] = React.useState(false);
  const [profile, setProfile] = React.useState({
    email: "",
    userName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthday: "",
    age: 0,
    address: "",
    currency: "",
    balance: 0,
    incomePeriod: "",
    incomeAmount: 0,
  });
  const navigate = useNavigate();
  const { user } = React.useContext(SessionContext);

  if (!user) {
    navigate("/");
  }

  React.useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const userId: any = user?.userId;
        const formData = {
          userId: userId,
        };

        if (!userId) throw new Error("Error Getting Token Id");

        const response = await Requests("get", "fetchProfiles", formData);

        if (response.status >= 400) throw new Error("Error Fetching Profile");

        setProfile(response.data.data);
        console.log("Successfully Fetched User Profile", response);
      } catch (error: any) {
        console.log("Error: ", error.message);
        return;
      }
    };
    fetchProfiles();
  }, []);

  React.useEffect(() => {
    console.log("profile updated: ", profile);
  }, [profile]);

  return (
    <>
      <h1>Firstname: {profile.firstName}</h1>
    </>
  );
}
