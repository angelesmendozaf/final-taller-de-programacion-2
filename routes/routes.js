import { Router } from "express";
import Controller from "../controllers/Controller.js";


const controller = new Controller();
const routes = Router();

routes.get("/",controller.getAll)
routes.post("/",controller.create)

export default routes