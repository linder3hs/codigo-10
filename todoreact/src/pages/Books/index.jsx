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

const Books = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleSubmit = () => {
    console.log(search);
  };

  return (
    <Container maxWidth="sm">
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
    </Container>
  );
};

export default Books;
