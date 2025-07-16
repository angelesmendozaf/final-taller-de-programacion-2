
import Service from "../service/Service.js"
class Controller{

service = new Service();

    
    getAll = async (req,res)=>{
        try{
  const data = await  this.service.getAll()
        res.status(200).send(data)
        }catch(error){
            res.status(400).json({success:false,message:"error al obtener data"})
        }

  
    }

    create = async (req,res)=>{
        try{
        const {nombre}= req.body; // ponemos de ejemplo nombre pero puede ser cualquier cosa, nombre apellido, rol, categoria, libros etc
        const data = await  this.service.create({nombre})
        res.status(200).send(data);
        }catch(error){
           res.status(400).json({success:false,message:error.message})
        }
    }
}

export default Controller