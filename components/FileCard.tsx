import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import * as React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import Image from "next/image";
import { auth } from "@/auth";
import { Grid } from "@mui/material";

export default async function FileCard() {
  const session = await auth();
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
          alt="Paella dish"
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
              <Image
                src={session?.user?.image || ""}
                alt={session?.user?.name || ""}
                width={25}
                height={25}
              />
            </Avatar>
          }
          subheader="creator name"
        />
      </Card>
    </Grid>
  );
}
