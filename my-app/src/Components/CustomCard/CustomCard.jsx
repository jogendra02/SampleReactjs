import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "Banana 1 kg",
    image: "https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768",
    price: "₹55",
  },
  {
    id: 2,
    title: "Sapodilla 1 kg",
    image: "https://m.media-amazon.com/images/I/51lrHM92IHL._SX679_.jpg",
    price: "₹44",
  },
  {
    id: 3,
    title: "Watermelon 1 kg",
    image: "https://thumbs.dreamstime.com/b/sliced-watermelon-25612609.jpg",
    price: "₹65",
  },
  {
    id: 4,
    title: "Mango 1 kg",
    image: "https://livekarts.in/wp-content/uploads/2021/05/mango-768x768.jpg",
    price: "₹65",
  },
  {
    id: 5,
    title: "Sweetcorn 1",
    image: "https://i.guim.co.uk/img/media/f529ddb4bfd1a2b8f7013209b8244096f1ef8ef2/154_990_3514_3514/master/3514.jpg?width=620&dpr=2&s=none&crop=none",
    price: "₹10",
  },
  {
    id: 6,
    title: "Apple 1 kg",
    image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740",
    price: "₹100",
  },
  {
    id: 7,
    title: "Grapes 1 kg",
    image: "https://tiimg.tistatic.com/fp/2/007/699/1-kilogram-juicy-sweet-and-delicious-red-flame-grapes-fruit-490.jpg",
    price: "₹59",
  },
  {
    id: 8,
    title: "Papaya 1 kg",
    image: "https://nativeindianorganics.com/wp-content/uploads/2023/04/papaya-seeds-online-india.jpg",
    price: "₹75",
  },
];

export default function CustomCard() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginTop: 4, fontWeight: "bold", color: "#2e7d32" }}
      >
        Blinkit – Fresh Groceries
      </Typography>
      <Grid container spacing={3} padding={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: 8,
                transition: "0.3s",
                ":hover": { boxShadow: 12 },
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                height="180"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                >
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  size="medium"
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: 2 }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}