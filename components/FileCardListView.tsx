import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArticleIcon from "@mui/icons-material/Article";

const FileCardListView = () => {
  return (
    <Box
      px={3}
      py={1}
      sx={{
        display: "flex",
        border: "1px solid",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <ArticleIcon />
        <Typography variant="body1" color="initial">
          file name
        </Typography>
      </Box>
      <MoreVertIcon />
    </Box>
  );
};

export default FileCardListView;
