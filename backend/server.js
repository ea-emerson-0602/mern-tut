import express from "express";
import cors from "cors";
import records from "./routes/record.js";

import { port} from "./config.js";

const PORT = process.env.port || 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// const cors = require('cors');
// app.use(cors({ origin: 'https://your-frontend.netlify.app' })); // Replace with your frontend domain
