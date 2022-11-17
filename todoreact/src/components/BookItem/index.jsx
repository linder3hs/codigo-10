import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from "@mui/material";

const BookItem = (props) => {
  const { book } = props;

  return (
    <Paper
      elevation={5}
      sx={{
        borderRadius: 4,
      }}
    >
      <CardMedia
        src={book.volumeInfo?.imageLinks?.thumbnail}
        height={250}
        sx={{
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
        component="img"
      />
      <CardContent>
        <Typography fontWeight="900" variant="body1">
          {book.volumeInfo.title.substring(0, 20)}
        </Typography>
        <Typography variant="body1" mt={3}>
          {book.volumeInfo?.description?.substring(0, 40)}...
        </Typography>
        <Box mt={2}>
          <Button fullWidth color="success">
            Agregar
          </Button>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default BookItem;
