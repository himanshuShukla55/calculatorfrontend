import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const { name, email, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const { success, msg } = await res.json();
      if (!success) {
        console.error(msg);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize="3xl" color="grey">
        Sign Up Form
      </Text>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
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
        Sign UP
      </Button>
    </form>
  );
};

export default SignUp;
