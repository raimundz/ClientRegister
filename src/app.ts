import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user/user.routes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

app.listen(3331, () => {
  console.log("Server running");
});
export default app;
