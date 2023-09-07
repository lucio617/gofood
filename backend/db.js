const mongoose=require('mongoose')
const mongoURI='mongodb+srv://GoFood:12345@cluster0.j5bzcmz.mongodb.net/GoFood?retryWrites=true&w=majority'
 const conn=async()=>{
    mongoose.connect(mongoURI)
    .then(()=>console.log("Database Connected"))
    .catch((err)=>{console.error(err)})
    
}

const Food=require('./models/FoodItems')

async function fetchAllFood() {
    try {
      global.food_items = await Food.find();

    
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
const foodCat=require('./models/FoodCategory')
  async function fetchAllCategories() {
    try {
      global.food_category = await foodCat.find();

    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }


fetchAllFood()
fetchAllCategories()
module.exports=conn


