import {v4 as uuidv4} from "uuid";

class Dao{
 
    data =[
"hola","todo","bien"
    ]


    getAll = async()=>{
        return this.data
    }

    create =async (params)=>{

        const info  ={
            id:uuidv4(),
           nombre: params.nombre
        }
        this.data.push(info  )

        return info
    }
}

export default Dao