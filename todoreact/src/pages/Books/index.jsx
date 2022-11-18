import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { BookItem } from "../../components";
import { getBooks } from "../../services";

const Books = () => {
  const [search, setSearch] = useState("");

  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleSubmit = async () => {
    const books = await getBooks(search);
    setBooks(books.items);
  };

  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={9}>
                <TextField
                  onChange={handleInputChange}
                  value={search}
                  size="small"
                  fullWidth
                  label="Buscar libros"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  disabled={!search}
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  color="warning"
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box my={3}>
        <Grid container spacing={3}>
          {books.length > 0 &&
            books.map((book) => (
              <Grid item md={2} xs={12}>
                <BookItem book={book} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Books;
