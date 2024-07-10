import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3000;


// CORS Configuration
const corsOptions = {
    origin: "http://localhost:4200",
    optionSuccessStatus: 204,
    methods: "GET, POST, PUT, DELETE"
}

// CORS Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });