// aca creo que en realidad tengo que hacer un container por cada entidad, en la carpeta container. pero usamos container.js generico para practicar ahora

import Service from "../service/Service.js";
import Controller from "../controllers/Controller.js";
import Dao from "../Dao/Dao.js"



const dao = new Dao();
const service = new Service(dao);
const controller = new Controller(service);

export default controller;