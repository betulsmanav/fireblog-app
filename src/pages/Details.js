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
import { useLocation, useNavigate} from "react-router-dom";
import { DeleteCard } from "../helpers/NewFunction";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  console.log(item);
 
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser)
  
  const handleUpdate = () => {
    navigate(`/updateblog/${item.id}`,{state:{item}})
  
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
        {(currentUser?.email === item?.email) ? (
        <div>
            
          <Button
            onClick={() =>handleUpdate(item.id)}
            
          >
            UPDATE
          </Button>
  
          <Button onClick={() => DeleteCard(item.id, navigate)}>DELETE</Button>
        </div>): null}
        
      </Card>
    </div>
  );
};

export default Details;
