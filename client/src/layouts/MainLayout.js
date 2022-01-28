import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useCallback } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./MainLayout.css";
import { useSelector } from "react-redux";

const sideBarLinks = [
  {
    label: "Home",
    path: "/home",
    icon: DashboardIcon,
  },
  {
    label: "Mint NFT",
    path: "/create-nft",
    icon: PeopleIcon,
  },
  {
    label: "etc",
    path: "/etc",
    icon: BarChartIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: ManageAccountsIcon,
  },
];

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  paddingTop: 50,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "0",
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
  //--
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const account = useSelector((state) => state.allNft.account);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#0e1118" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            NFT MARKETPLACE
          </Typography>
          <Typography>
            User MetaMask Account : &nbsp;
            <strong>
              {account.slice(0, 7)}...{account.slice(-8)}
            </strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="drawerHeader">
          <img
            width="50"
            height="50"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQF6Q2ARgLlTQg/company-logo_200_200/0/1623773209914?e=2159024400&v=beta&t=XNz3Pjl2jKre67TlySWg73ScGMOiR-Kjtpt545veidE"
            alt="HMS"
          />
          <Typography sx={{ mx: 3 }} variant="h4">
            HMS
          </Typography>
          <IconButton onClick={handleDrawerClose} size="large">
            {theme.direction === "rtl" ? (
              <MenuIcon />
            ) : (
              <MenuOpenIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ mb: 1 }} />
        {/* <Typography sx={{ mx: 7 }} variant="h3">
          Filters
        </Typography>
        <Box sx={{ maxWidth: 100, mx: 2, mt: 3 }}>
          <TextField
            id="outlined-number"
            label="Min #Eth"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Max #Eth"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ minWidth: 100, mx: 2, mt: 3 }}>
          <Button variant="outlined">Apply</Button>
        </Box>
        {sideBarLinks.map((link) => (
          <Box sx={{ maxWidth: 200, mx: 2, mt: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Properties</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Filters"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ))}
        <Box sx={{ minWidth: 100, mx: 2, mt: 3 }}>
          <Button variant="contained">Apply</Button>
        </Box> */}
        <List sx={{ mx: 1 }}>
          {sideBarLinks.map((link) => (
            <ActiveLink key={0} to={link.path}>
              <link.icon
                style={{ minWidth: 40, minHeight: 40, display: "inline-block" }}
                sx={{ mb: -2 }}
              />
              <Typography style={{ display: "inline-block" }} sx={{ mx: 4 }}>
                {link.label}
              </Typography>
              <br />
              <br />
            </ActiveLink>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DashboardLayoutRoot>
          <Outlet />
        </DashboardLayoutRoot>
      </Box>
    </Box>
  );
}
const ActiveLink = ({ to, children }) => {
  const active = useLocation().pathname == to;
  const navigate = useNavigate();

  const route = useCallback(
    (e) => {
      e.preventDefault();
      navigate(to);
    },
    [to, navigate]
  );

  return (
    <a
      className={`py-2 m-1 p-1 w-100 d-flex align-items-center d-block ${
        active ? "active" : ""
      }`}
      onClick={route}
    >
      {children}
    </a>
  );
};
