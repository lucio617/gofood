const mongoose=require('mongoose')

const {Schema}=mongoose

const FoodSchema=new Schema({
    name:{
        type: String,
        required:true
    },
    CategoryName:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
  
})

module.exports=mongoose.model('food_items',FoodSchema)