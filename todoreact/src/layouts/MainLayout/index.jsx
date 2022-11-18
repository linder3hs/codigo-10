import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { BookContext } from "../../context/BookContext";
import MenuIcon from "@mui/icons-material/Menu";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const drawerWidth = 240;

const MainLayout = () => {
  const { isAuth, user, logout } = useContext(AuthContext);

  const { cartBooks } = useContext(BookContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {user.name}
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding href="/perfil">
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Perfil" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding href="/books">
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Bookstore" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={logout}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  if (!isAuth()) return <Navigate to="/login" />;

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {user.name}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/perfil" sx={{ color: "#fff" }}>
              <Person4RoundedIcon />
            </Button>
            <Button component={Link} to="/books" sx={{ color: "#fff" }}>
              <MenuBookRoundedIcon />
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Badge badgeContent={cartBooks.length} color="error">
                <ShoppingCartRoundedIcon />
              </Badge>
            </Button>
            <Button variant="contained" onClick={logout} color="error">
              <LoginRoundedIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
