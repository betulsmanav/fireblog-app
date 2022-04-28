import  React from "react";
// import  {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import cwLogo from "../assets/cw.jpeg";
import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
  // !const navigate = useNavigate();
  // !onClickCapture={()=>navigate("/about")}

  // const {currentUser} = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
   
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
                <img style={{ height: "30px" }} src={cwLogo} alt="" />
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link  to="/about">
                <MenuItem onClick={handleCloseUserMenu}>About</MenuItem>
              </Link>
              
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Link to="/" underline="none">
              <Typography variant="h5" component="h2">
                ──── <span> {"<FireBlogApp/>"}</span>────
              </Typography>
            </Link>
          </Box>
              {/* ??????????????????? */}
          {/* {currentUser ? (<Box sx={{ flexGrow: 1, display: "flex" }}>
            <p>{currentUser?.displayName}</p>
            </Box>):(<p></p>)} */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to="/profile">
                <MenuItem value="profile" onClick={handleCloseUserMenu}>Profile</MenuItem>
              </Link>
              <Link to="/newblog">
                <MenuItem onClick={handleCloseUserMenu}>New</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
