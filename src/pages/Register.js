import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { createUser } from "../helpers/userFunction";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    const displayName = `${userName}`;
    e.preventDefault();
    createUser(email,password,navigate,displayName);
    console.log(userName, email, password);
  }


  return (
    <Grid
      textAlign="center"
      style={{ width: "300" }}
    >
      
      <h2 className="contact-header">----Register----</h2>
    
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
      
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              placeholder="User Name"
              required
              onChange={(e)=>setUserName(e.target.value)}
              
            />
            <TextField
              variant="outlined"
              name="email"
              placeholder="Email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              
            />
            <TextField
              variant="outlined"
              name="password"
              placeholder="Password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              
            />
            
            <Button variant="contained" type="submit" value="Submit"
              // onClick={handleSubmit} 
              // !kullanirsan type submit olacak ama burada required calismaz dgru kullanimi forma onSubmit vermektir
            >
              register
            </Button>
            
          </Stack>

        </form>
      </Box>
    </Grid>
  );
};

export default Login;


