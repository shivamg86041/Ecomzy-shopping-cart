import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removefromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  }
  return (
    <div className="">
      <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
        <div  className="w-[30%] mr-5">
          <img src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div onClick={removefromCart} className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"> 
            <MdOutlineDeleteOutline className="text-2xl" color="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <hr />
      </div>
    </div>
  );
};

export default CartItem;
