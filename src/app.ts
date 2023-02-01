import "reflect-metadata";
import express from "express";
// import useRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.listen(3331, () => {
  console.log("Server running");
});
export default app;
