import { Router } from "express";
import sessionController from "../../controllers/session/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", sessionController);

export default sessionRoutes;
