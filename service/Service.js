import Dao from "../Dao/Dao.js"
class Service{

dao = new Dao();  // cambiar nombre depende la entidad que nos de el enunciado

    getAll = async ()=>{
        const data = this.dao.getAll() 
        return data
    }

    create = async (params)=>{
        const data = await this.dao.create(params)
        return data
    }
}


export default Service