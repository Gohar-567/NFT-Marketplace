import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Collections from "./list";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";
import { useStyles } from "./styles.js";

function NFTsCollections() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>All Collections</h1>
      <Grid container spacing={2}>
        {Collections.map((e) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link to="/user/one-collection">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={e.src}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default NFTsCollections;
