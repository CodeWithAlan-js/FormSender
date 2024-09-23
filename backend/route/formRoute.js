import { catchErrors } from "../utils.js";
import { createForm } from "../controller/formController.js";
import { Router } from "express";

const formRoute = Router();

export default formRoute.post("/createForm", catchErrors(createForm));
