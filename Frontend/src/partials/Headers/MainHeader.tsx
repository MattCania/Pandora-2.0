import logo_pandora from "../../assets/logo_pandora.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Requests from "../../components/Requests";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SessionContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
const settings = [
  { label: "Profile", path: "/account/profile" },
  { label: "Account", path: "/account" },
  { label: "Dashboard", path: "/dashboard" },
];

type Page = {
  label: string;
  path: string;
};

type MainHeaderProps = {
  pages: Page[];
};

export default function MainHeader({ pages }: MainHeaderProps) {
  const { user, setUser } = React.useContext(SessionContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: String) => {
    navigate(`${path}`);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    handleCloseNavMenu;
    try {
      const result = await Requests("post", "logout", null);

      if (!result) throw new Error("Logout Error");

      setUser(null);
      navigate("/pandora/login");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <AppBar
      position='static'
      sx={{
        margin: 0,
        backgroundColor: (theme) => theme.palette.primary.main,
        mb: 2,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            maxHeight={64}
            maxWidth={64}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              borderRadius: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={logo_pandora}
              alt=''
            />
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/pandora'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PANDORA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu;
                    handleNavigate(page.path);
                  }}
                  sx={{
                    backgroundColor:
                      location.pathname === page.path
                        ? "secondary.dark"
                        : "common.white",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/pandora'
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                alignSelf: "center",
              }}
            >
              PANDORA
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleCloseNavMenu;
                  handleNavigate(page.path);
                }}
                sx={{
                  my: 2,
                  color: "common.white",
                  backgroundColor:
                    location.pathname === page.path
                      ? "secondary.light"
                      : "primary.main",
                  display: "block",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {user !== null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  "& .MuiMenu-paper": {
                    backgroundColor: "secondary.light",
                  },
                }}
                id='menu-appbar'
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.label}
                    sx={{
                      backgroundColor:
                        location.pathname === setting.path
                          ? "primary.light"
                          : "transparent",
                      color:
                        location.pathname === setting.path
                          ? "text.secondary"
                          : "text.primary",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      handleCloseUserMenu;
                      handleNavigate(setting.path);
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting.label}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Button
                sx={{
                  my: 2,
                  mx: 2,
                  color: (theme) => theme.palette.common.white,
                  display: "block",
                }}
                onClick={() => navigate("/pandora/register")}
              >
                Sign Up
              </Button>
              <Button
                sx={{
                  my: 2,
                  mx: 2,
                  color: (theme) => theme.palette.common.black,
                  display: "block",
                  backgroundColor: (theme) => theme.palette.common.white,
                }}
                onClick={() => navigate("/pandora/login")}
              >
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
