import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BookItem = (props) => {
  const { book } = props;

  return (
    <Card>
      <CardMedia />
      <CardContent>
        <Typography variant="h6">{book.volumeInfo.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookItem;
