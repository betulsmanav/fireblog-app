import React, { useContext } from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";
import {NewContext} from '../contexts/NewContext'
import { UpdateCard } from "../helpers/NewFunction";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  
  const {handleChange } = useContext(NewContext);
  const navigate = useNavigate()
  const {state} = useLocation();                                
  console.log(state)
  
  const handleFormUpdate = (e) => {
    e.preventDefault();
    UpdateCard(state.item)


    navigate("/details", { state:  state.item });
  }
  
  return (
    <Grid container textAlign="center" direction="column" style={{ width: "300px" }}>
      <h2 className="contact-header">────Update Bolg────</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleFormUpdate}>
          <Stack spacing={3} direction="column">
            <TextField
              type="text"
              variant="outlined"
              name="title"
              value={state.item.title}
              onChange={handleChange}
              label="Title*"
              placeholder="Title"
              size="small"
            />
            <TextField
              variant="outlined"
              name="imageUrl"
              value={state.item.imageUrl}
              onChange={handleChange}
              label="Image URL*"
              placeholder="Image URL"
              size="small"
            />
            <TextField
              className="newBlog-input"
              id="outlined-textarea"
              name="content"
              value={state.item.content}
              onChange={handleChange}
              label="Content*"
              placeholder="Content"
              multiline
              rows={7}
            />

            <Button variant="contained" type="submit" value="Submit" >
              Edit
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};



export default UpdateBlog
