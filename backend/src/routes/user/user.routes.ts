import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controllers";
import userDeleteController from "../../controllers/user/deleteUser.controllers";
import listUsersController from "../../controllers/user/listUsers.controller";
import updateUserController from "../../controllers/user/updateUser.controllers";
import getOwnUserController from "../../controllers/user/getOwnUser.controllers";
import { authUser } from "../../middlewares/authUser.middleware";

const router = Router();

router.post("", createUserController);
router.get("", listUsersController);
router.get("/user", authUser, getOwnUserController);
router.patch("/:id", authUser, updateUserController);
router.delete("/:id", authUser, userDeleteController);
export default router;
