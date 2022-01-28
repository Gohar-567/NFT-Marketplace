import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/index";
import MainLayout from "../src/layouts/MainLayout";
import Home from "./pages/Home/index";
import CreateNFT from "./pages/CreateNFT/index";
import Item from "./pages/Item/index";

import UserMainLayout from "../src/layouts/UserMainLayout";
import NFTsCollections from "./pages/NFTsCollections";
import NFTsOneCollection from "./pages/NFTsOneCollection";
import SingleNFT from "./pages/SingleNFT";
import MintNFT from "./pages/MintNFT";

import "./App.css";

// import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
// import makeStyles from '@mui/styles/makeStyles';
// const theme = createTheme();

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/create-nft" element={<CreateNFT />} />
            <Route path="/nft/:nftId" element={<Item />} />
            <Route>404 Not Found!</Route>
          </Route>
        </Routes>
        <Routes>
          <Route path="/user" element={<UserMainLayout />}>
            <Route
              path="/user/collections"
              element={<NFTsCollections />}
            ></Route>
            <Route
              path="/user/one-collection"
              element={<NFTsOneCollection />}
            ></Route>
            <Route path="/user/single-nft" element={<SingleNFT />}></Route>
            <Route path="/user/mint-nft" element={<MintNFT />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
