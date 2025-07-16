//aca van las validaciones

const inputValidates = async (req ,res , next )=>{

    const{nombre } = req.body

    if(!nombre){
        res.status(404).send({message:"deben ingresar datos"}); return   }


}

export default inputValidates;