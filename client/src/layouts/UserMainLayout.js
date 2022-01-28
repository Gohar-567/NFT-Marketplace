import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./UserMainLayout.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function PermanentDrawerLeft() {
  const [value, setValue] = useState("one");
  const history = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    debugger;
    history(newValue);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ bgcolor: "#0e1118" }}>
          <Toolbar>
            <img
              width="50"
              height="50"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQF6Q2ARgLlTQg/company-logo_200_200/0/1623773209914?e=2159024400&v=beta&t=XNz3Pjl2jKre67TlySWg73ScGMOiR-Kjtpt545veidE"
              alt="HMS"
            />
            <Typography sx={{ mx: 1 }} variant="h4">
              HMS Collection
            </Typography>
            <Box sx={{ mx: 7 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="primary"
                aria-label="primary tabs example"
              >
                <Tab value="/user/collections" label="MarketPlace" />
                <Tab value="/user/mint-nft" label="Create Collection" />
                <Tab label="Help ?" />
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search.. Items, Collections"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Typography>
              <strong>Connect Wallet</strong>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
      <div class="footer">
        Powered by Network{"     "}
        <a href="https://www.hashmakersol.com/">HashMaker Solution</a>
      </div>
    </>
  );
}
