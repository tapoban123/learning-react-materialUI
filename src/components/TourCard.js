import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TourCard = () => {
  return (
    <Grid size={3}>
      <Paper elevation={3}>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1"
          alt=""
          className="img"
        ></img>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component={"h2"}>
            Immerse into the falls
          </Typography>
          <Typography variant="body2" component={"p"}>5 hours</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
