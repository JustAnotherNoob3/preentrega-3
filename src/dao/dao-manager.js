
export default class Dao {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.find()
    }
    getById(id) {
        return this.model.findById(id);
    }
    getByOther(obj) {
        return this.model.find(obj);
    }
    getPaginated(sort, extra){
        return this.model.paginate(sort, extra);
    }
    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
    deleteMany(obj){
        return this.model.deleteMany(obj);
    }
    create(obj){
        return this.model.create(obj);
         
    }
    update(id, obj){
        return this.model.findByIdAndUpdate(id,obj);
    }
}
