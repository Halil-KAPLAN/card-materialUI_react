import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div">
          Cards
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
