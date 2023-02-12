import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controllers";
import userDeleteController from "../../controllers/user/deleteUser.controllers";
import listUsersController from "../../controllers/user/listUsers.controller";
import updateUserController from "../../controllers/user/updateUser.controllers";

const router = Router();

router.post("", createUserController);
router.get("", listUsersController);
router.patch("/:id", updateUserController);
router.delete("/:id", userDeleteController);
export default router;
