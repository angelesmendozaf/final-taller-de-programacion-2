import { Router } from "express";
import inputValidates from "../utils/inputValidates.js";
import controller from "../container/container.js";


const routes = Router();

routes.get("/",controller.getAll)

routes.post("/",inputValidates,controller.create)

export default routes