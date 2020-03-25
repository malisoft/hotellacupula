import mongoose,{Schema} from 'mongoose';
const articuloSchema = new Schema({
    categoria: {type: Schema.ObjectId, ref:'categoria'},
    codigo: {type: String,maxlength:64},
    nombre:{type:String,maxlength:50,unique:true,required:true},
    imagen:{type:String,maxlength:150,unique:true,required:true},
    descripcion: {type:String,maxlength:255},
    precio_venta:{type:Number,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
});
const Articulo = mongoose.model('platos',articuloSchema);
export default Articulo;