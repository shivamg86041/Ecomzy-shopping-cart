import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { remove, add } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();
  const AddtoCart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const RemovefromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 rounded-xl p-4 mt-10 ml-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
    <div>
      <p className="text-gray-700 font-semibold text-lg text-left w-40 mt-1 truncate">{post.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]"><img className="w-full h-full" src={post.image} alt="" /></div>
    <div className="flex justify-between gap-12 items-center w-full mt-3">
    <div>
      <p className="text-green-600 font-semibold">{`$${post.price}`}</p>
    </div>
    {
      cart.some((p)=> p.id===post.id) ? (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={RemovefromCart}>Remove Item</button>) : (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase transition duration-300 ease-in hover:bg-gray-700 hover:text-white" onClick={AddtoCart}>Add to Cart</button>)
    }
    </div>
    </div>
  );
};

export default Product;
