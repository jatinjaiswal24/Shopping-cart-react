import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removefromCart = () => {
    dispatch(remove(item.id));
    toast.info("Item removed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="mb-10">
      <div className="flex space-x-8 w-[90%]">
        <div>
          <img src={item.image} className="h-[280px]" />
        </div>
        <div className="mt-12 w-[400px]">
          <h1 className="font-bold text-lg">{item.title}</h1>
          <h1 className="mt-3">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center mt-10">
            <p className="text-green-600 font-extrabold text-xl">
              {item.price}
            </p>
            <div onClick={removefromCart} className="relative cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-red-300 absolute z-[-1] -top-3 -left-3"></div>
              <MdDeleteForever className="z-1 cursor-pointer " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
