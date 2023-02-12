import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user/user.routes";
import sessionRoutes from "./routes/session/session.routes";
import contactRoutes from "./routes/contact/contact.routes";
const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contact", contactRoutes);

app.listen(3331, () => {
  console.log("Server running");
});
export default app;
