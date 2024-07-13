"use client";
import ArticleIcon from "@mui/icons-material/Article";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Image from "next/image";

export default function FileCardGridView() {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 350, backgroundColor: "#F8FAFD" }} elevation={4}>
        <CardHeader
          sx={{ padding: "8px" }}
          avatar={<ArticleIcon color="primary" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="file name"
        />

        <CardMedia
          sx={{ backgroundColor: "white", width: "290px", margin: "0 auto" }}
          component="img"
          height="150"
          image="/static/images/cards/paella.jpg"
          alt="file content"
        />

        <CardHeader
          sx={{ padding: "8px" }}
          avatar={
            <Avatar
              sx={{
                bgcolor: red[500],
                width: "25px",
                height: "25px",
                border: "1px solid",
              }}
              aria-label="recipe"
            >
              N
            </Avatar>
          }
          subheader="creator name"
        />
      </Card>
    </Grid>
  );
}
