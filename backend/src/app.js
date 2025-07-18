import express from "express";
import morgan from "morgan";
import cors from "cors";
import acronymRoutes from "./routes/acronyms.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/acronyms", acronymRoutes);

export default app;
