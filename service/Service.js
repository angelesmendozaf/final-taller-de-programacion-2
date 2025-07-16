
class Service{
    constructor(Dao) {
    this.algo = Dao;// cambiar nombre depende la entidad que nos de el enunciado
  }


    getAll = async ()=>{
        const data = this.algo.getAll()
        return data
    }

    create = async (params)=>{
        const data = await this.algo.create(params)
        return data
    }
}


export default Service