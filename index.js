import express from "express";
import routes from "./routes/routes.js";

const app = express();


//middelwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/app",routes)


//levanto el servidor
app.listen(8080, ()=> {
    console.log("servidor escuchando en el puerto 8080")
})