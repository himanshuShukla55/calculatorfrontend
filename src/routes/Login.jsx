import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  userLoginFailed,
  userLoginStart,
  userLoginSuccess,
} from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const { email, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(userLoginStart());
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const { success, msg } = await res.json();
      if (!success) {
        console.error(msg);
        dispatch(userLoginFailed({ msg }));
        return;
      }
      dispatch(userLoginSuccess());
      navigate("/profile");
    } catch (error) {
      console.error(error);
      dispatch(userLoginFailed(error));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize="3xl" color="grey">
        Login Form
      </Text>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="messenger">
        Login
      </Button>
    </form>
  );
};

export default Login;
