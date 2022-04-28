import React, { useState } from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../helpers/userFunction";

const Login = ({ handleFormSubmit }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate)

    console.log( email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
    
  }


  return (
    <Grid textAlign="center" style={{ width: "300px" }}>
      <h2 className="contact-header">----Login----</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" type="submit" value="Submit">
              Login
            </Button>
            <Button onClick={handleProviderLogin} variant="outlined" type="submit" value="Submit">
              Continue with google
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
