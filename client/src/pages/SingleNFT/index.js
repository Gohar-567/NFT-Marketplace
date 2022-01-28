import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useStyles } from "./styles.js";

const numbers = [1, 2, 3, 4, 5, 6];

function SingleNFT() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="h4">Purchase Your NFT</Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: "#191E3B", color: "white" }}>
                <Typography gutterBottom variant="h6" component="div">
                  (Collection Logo)
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="410"
                image="https://card.godsunchained.com/?id=1435&q=4"
                alt="green iguana"
                sx={{ backgroundColor: "#0E1118" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ flexGrow: 1 }}
              gutterBottom
              variant="h6"
              component="div"
            >
              #1234567
            </Typography>
            <Typography
              sx={{ color: "red" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Available
            </Typography>
          </Box>
          <Typography gutterBottom variant="h4" component="div">
            Thunder Caller
          </Typography>
          <Box sx={{ display: "flex" }}>
            <img
              height="32px"
              width="32px"
              src="https://images.godsunchained.com/misc/gu-sigel.png"
              alt="Collection Icon"
            ></img>
            <Typography
              sx={{ px: 2 }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Gods Unchained
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mt: 35 }}>
            <img
              height="32px"
              width="32px"
              src="https://design-system.immutable.com/currency_icons/currency--eth.svg"
              alt="Collection Icon"
            ></img>
            <Typography
              sx={{ px: 2 }}
              gutterBottom
              variant="h4"
              component="div"
            >
              1.02345
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: 500, height: 40 }}
              variant="contained"
              color="success"
            >
              Buy NFT
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        sx={{ mt: 5, mb: 4, textDecoration: "underline" }}
        variant="h4"
      >
        Properties
      </Typography>
      <Grid container spacing={2}>
        {numbers.map((number) => {
          return (
            <Grid item xs={6}>
              <Card sx={{ minWidth: 275, backgroundColor: "#0E1118" }}>
                <CardContent sx={{ fontSize: 20, textAlign: "center" }}>
                  <Typography color="white" gutterBottom variant="h5">
                    Color
                  </Typography>
                  <Typography color="#C1C1C1" gutterBottom variant="h6">
                    Black
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default SingleNFT;
