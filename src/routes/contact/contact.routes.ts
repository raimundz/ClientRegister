import { Router } from "express";
import createContactController from "../../controllers/contact/createContact.controllers";
import deleteContactController from "../../controllers/contact/deleteContact.controllers";
import listContactsController from "../../controllers/contact/listContacts.controllers";
import updateContactController from "../../controllers/contact/updateContact.controllers";
import { authUser } from "../../middlewares/authUser.middleware";

const router = Router();

router.post("", authUser, createContactController);
router.get("", authUser, listContactsController);
router.patch("/:id", authUser, updateContactController);
router.delete("/:id", authUser, deleteContactController);
export default router;
