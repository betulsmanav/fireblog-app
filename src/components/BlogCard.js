import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./BlogCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {  useFetch } from "../helpers/NewFunction";
import loading from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

function BlogCard() {

  const { isloading, blogCard } = useFetch();
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate(`details/${item.id}`, {state:{item}});
  };

  return (
    <div className="blogCardForm">
      {isloading ? (
        <div className="spinner">
          <img src={loading} alt="" />
        </div>
      ) : blogCard?.length === 0 ? (
        <div className="spinner">
          <h1>card bos</h1>
        </div>
      ) : (
        blogCard?.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}  className="cardContainer">
            <CardMedia
              src={item.imageUrl}
              className="cardImage"
              component="img"
              height="140"
              alt="blog image"
              sx={{ cursor: "pointer" }}
              onClick={() => handleCardClick(item)}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ cursor: "pointer" }}
              >
                {item?.title}
              </Typography>

              <Typography variant="h6" sx={{ fontSize: "12px" }}>
                {item?.date}{" "}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
              >
                {item?.content}
              </Typography>
            </CardContent>

            <CardActions sx={{ borderRadius: "50%" }} className="cardBottom">
              <FavoriteIcon sx={{ cursor: "pointer", marginRight: "5px" }} />
              <span style={{ marginRight: "0.5rem" }}></span>
              <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }} />
              <span> </span>

              <Typography className="email">{item?.user}</Typography>
            </CardActions>
            
          </Card>
        ))
      )}
    </div>
  );
}

export default BlogCard;
