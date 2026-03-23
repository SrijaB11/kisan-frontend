import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";

function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <AppBar position="static" sx={{ background: "#6c63ff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">KisanMart </Typography>

          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Empowering Farmers
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Fresh products directly from farms to your home.
            </Typography>

            <Button variant="contained" sx={{ mr: 2, background: "#6c63ff" }}>
              Shop Now
            </Button>

            <Button variant="outlined">Join Us</Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1592928302636-c83cf1bda1c6"
              alt="farm"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ background: "#f5f7fb", py: 5 }}>
        <Container>
          <Grid container spacing={3}>
            {[
              { value: "500+", label: "Farmers Connected" },
              { value: "10K+", label: "Customers" },
              { value: "100%", label: "Fresh Products" },
            ].map((item) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h4">{item.value}</Typography>
                    <Typography>{item.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose KisanMart?
        </Typography>

        <Grid container spacing={3}>
          {[
            " Fresh from Farms",
            "Best Market Prices",
            " Direct Farmer Supply",
            "Fast Delivery",
          ].map((text) => (
            <Grid item xs={12} md={3} key={text}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography>{text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ background: "#f5f7fb", py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Popular Categories
          </Typography>

          <Grid container spacing={3}>
            {[" Vegetables", " Fruits", "Grains", " Dairy"].map((cat) => (
              <Grid item xs={12} md={3} key={cat}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography>{cat}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Start Your Journey with KisanMart
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Join today and experience fresh, direct-from-farm shopping.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/register"
          sx={{ background: "#6c63ff" }}
        >
          Get Started
        </Button>
      </Box>

      <Box
        sx={{ background: "#333", color: "white", py: 2, textAlign: "center" }}
      >
        <Typography>© 2026 KisanMart. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;
