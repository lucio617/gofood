const mongoose=require('mongoose')

const {Schema}=mongoose

const CategorySchema=new Schema({
    CategoryName:{
        type: String,
        required:true
    }
   
  
})

module.exports=mongoose.model('foodcategories',CategorySchema)