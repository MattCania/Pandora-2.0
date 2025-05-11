import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'

export default function GetSession () {
	const [userData, setUser] = React.useState(null);
  
	useEffect(() => {
	  const fetchUserInfo = async () => {
		try {
		  const response = await axios.get('/api/check-session')
  
		  if (!response) throw new Error("Session Undefined or Empty");
		 
		  const data = await response.data;
		  console.log("data", data)
		  setUser(data);
  
		} catch (error) {
		  console.error("Error fetching user info:", error);
		  setUser(null);
		}
	  };
  
	  fetchUserInfo();
	}, []);
  
	return userData;
}