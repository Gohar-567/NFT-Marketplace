import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Collections from "./list";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useStyles } from "./styles.js";
import FilterBar from "../../components/FilterBar";

function NFTsOneCollection() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12} className={classes.filters}>
          <FilterBar></FilterBar>
        </Grid>
        <Grid item md={9} xs={12} className={classes.main} sx={{ p: 3, mt: 2 }}>
          <h1>Items for Sale</h1>
          <Grid container spacing={0} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={SearchNFTs.map((option) => option.label)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search For NFTs.."
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        className: classes.inputColor,
                      }}
                    />
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={SearchNFTs}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Listing Currency"
                    InputProps={{
                      ...params.InputProps,
                      className: classes.inputColor,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} sx={{ mb: 2 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={SearchNFTs}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sort By"
                    InputProps={{
                      ...params.InputProps,
                      className: classes.inputColor,
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Collections.map((e) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/user/single-nft">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="250"
                          image={e.src}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              sx={{ flexGrow: 1 }}
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              NFT Name
                            </Typography>
                            <Typography
                              sx={{ color: "red" }}
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              Price: 00
                            </Typography>
                          </Box>
                          {/* <Typography gutterBottom variant="h6" component="div">
                          NFT Name
                        </Typography> */}
                          <Typography gutterBottom component="div">
                            {e.name}(collection)
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NFTsOneCollection;

const SearchNFTs = [
  { label: "ABC", value: 1 },
  { label: "ABC", value: 2 },
  { label: "ABC", value: 3 },
  { label: "ABC", value: 4 },
  { label: "ABC", value: 5 },
  { label: "ABC", value: 6 },
  { label: "ABC", value: 7 },
];
