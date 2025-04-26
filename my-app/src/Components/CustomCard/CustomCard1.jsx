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
    title: "Onion 1 kg",
    image: "https://3.imimg.com/data3/CC/DF/MY-9136385/onions-1000x1000.jpg",
    price: "₹35",
  },
  {
    id: 2,
    title: "Bringal 1 kg",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/11/469371308/YJ/GH/AI/236853173/product-jpeg-1000x1000.jpg",
    price: "₹42",
  },
  {
    id: 3,
    title: "Ladies finger 1 kg",
    image: "https://doorkisan.com/wp-content/uploads/2016/05/Lady-Finger-Okra-By-Door-Kisan-2.png",
    price: "₹30",
  },
  {
    id: 4,
    title: "Domestic 1 kg",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/4/300005748/NH/QE/AQ/147328428/1651167286963-sku-0230-0-1000x1000.jpg",
    price: "₹36",
  },
  {
    id: 5,
    title: "Carrot 1",
    image: "https://m.media-amazon.com/images/I/71S6oQqVa5L._SX679_.jpg",
    price: "₹33",
  },
  {
    id: 6,
    title: "Beetroot 1 kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/316774192/AM/QQ/MA/3042133/fresh-red-beetroot-1000x1000.jpg",
    price: "₹55",
  },
  {
    id: 7,
    title: "Cucumber 1 kg",
    image: "https://m.media-amazon.com/images/I/71xkI-PIE5L._SX679_PIbundle-2,TopRight,0,0_SX679SY493SH20_.jpg",
    price: "₹25",
  },
  {
    id: 8,
    title: "Bottle guard 1 kg",
    image: "https://149363026.v2.pressablecdn.com/wp-content/uploads/2018/12/E72A0178-768x512.jpg",
    price: "₹35",
  },
];

export default function CustomCard1() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginTop: 4, fontWeight: "bold", color: "#2e7d32" }}
      >
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