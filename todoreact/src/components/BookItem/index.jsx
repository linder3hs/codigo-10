import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const BookItem = (props) => {
  const { book } = props;

  return (
    <Card>
      <CardMedia
        src={book.volumeInfo?.imageLinks?.thumbnail}
        height={300}
        component="img"
      />
      <CardContent>
        <Typography fontWeight="900" variant="h6">
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="body1">
          {book.volumeInfo?.description?.substring(0, 120)}...
        </Typography>
        <Box my={2}>
          <Button fullWidth color="success" variant="contained">
            Agregar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookItem;
