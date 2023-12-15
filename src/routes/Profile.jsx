import React, { useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFailed, getUserStart, getUserSuccess } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.user);
  const getUserData = async () => {
    try {
      dispatch(getUserStart());
      const res = await fetch("/api/users");
      const { success, msg, data } = await res.json();
      if (!success) {
        console.error(msg);
        dispatch(getUserFailed({ msg }));
        return;
      }
      dispatch(getUserSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getUserFailed(error));
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div id="info_container">
      <Text fontSize="3xl" color="grey">
        Your Details
      </Text>
      <Text fontSize="xl">Name : {user?.name}</Text>
      <Text fontSize="xl">Email : {user?.email}</Text>
      <Button colorScheme="messenger" onClick={() => navigate("/calculator")}>
        Use Calculator
      </Button>
    </div>
  );
};

export default Profile;
