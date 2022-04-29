import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteCard } from "../helpers/NewFunction";
// import { useContext } from "react";
// import { NewContext } from "../contexts/NewContext";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  // const { info } = useContext(NewContext)
  
  const handleUpdate = () => {
    navigate("/updateblog",{state:{item}})
  }
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="cardContainer">
        <CardMedia
          className="cardImage"
          src={item.imageUrl}
          image={item.imageUrl}
          component="img"
          height="140"
          alt="blog image"
          sx={{ cursor: "pointer" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ cursor: "pointer" }}
          >
            {item.title}
          </Typography>

          <Typography variant="h6" sx={{ fontSize: "12px" }}>
            {/* {details.date}{" "} */}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
          >
            {item.content}
          </Typography>
        </CardContent>

        <CardActions sx={{ borderRadius: "50%" }} className="cardBottom">
          <FavoriteIcon sx={{ cursor: "pointer", marginRight: "5px" }} />
          <span style={{ marginRight: "0.5rem" }}></span>
          <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }} />
          <span> </span>

          <Typography className="email">{item.email}</Typography>
        </CardActions>
        <Button
          onClick={() =>handleUpdate(item.id)}
          
        >
          UPDATE
        </Button>

        <Button onClick={() => DeleteCard(item.id, navigate)}>DELETE</Button>
      </Card>
    </div>
  );
};

export default Details;
