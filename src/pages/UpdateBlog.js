import React, { useContext } from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";
import {NewContext} from '../contexts/NewContext'
import { UpdateCard } from "../helpers/NewFunction";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const UpdateBlog = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const item = location.state.item;
  
  // console.log(item)
  // const {handleChange } = useContext(NewContext);

  const { info, setInfo } = useContext(NewContext)
  const {currentUser}=useContext(AuthContext)
  
  const newValue = { title: item.title,
    imgUrl: item.imgUrl,
    content: item.content,
    date: item.date,
    likes: 0,
    user: currentUser.email,
  }
  
  const handleChange =(e)=> {
    e.preventDefault();
    const { name, value, defaultValue } = e.target;
    setInfo({ ...newValue, [name]: (value ? value : defaultValue), });
}
  const handleFormUpdate = (e) => {
    e.preventDefault();
    UpdateCard(item)
    navigate(`/details/${item.id}`, { state: { item } });
    setInfo({ ...info, title: "", imgUrl: "", content: "", date: "" });

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
              defaultValue={item?.title}
              onChange={(e)=>handleChange(e)}
  
              label="Title*"
              placeholder="Title"
              size="small"
            />
            <TextField
              variant="outlined"
              name="imageUrl"
              defaultValue={item?.imageUrl}
              onChange={(e)=>handleChange(e)}

              label="Image URL*"
              placeholder="Image URL"
              size="small"
            />
            <TextField
              className="newBlog-input"
              id="outlined-textarea"
              name="content"
              defaultValue={item?.content}
              onChange={(e)=>handleChange(e)}
              label="Content*"
              placeholder="Content"
              multiline
              rows={7}
            />

            <Button
              variant="contained"
              type="submit"
              value="Submit"
            onClick={handleFormUpdate}>
              Edit
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};



export default UpdateBlog
