import React from "react";
import { VegaLite } from "react-vega";
import sample1 from "/data/sample1.json";
import { Container, CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Visualisierung
        </Typography>
        <VegaLite spec={sample1} />
      </Container>
    </div>
  );
}

export default App;
