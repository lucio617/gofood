import { createContext, useContext, useReducer } from "react"

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            console.log(action.id)
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size ,img:action.img}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            let arr=[...state]
            console.log("yes")
            arr.find((food,index)=>{
                if(food.id===action.id){
                    
                    arr[index]={...food,qty: parseInt(action.qty)+food.qty,price: action.price +food.price}
                }
                return arr
            })
            return arr
        case "DROP":
            let empArray=[]
            return empArray
        default:
            console.log("error in reducer");
    }
}
export const CartProvider =({children})=>{

const [state,dispatch]=useReducer(reducer,[])


    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext)