import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-between mx-auto max-w-6xl mt-10 ">
          <div>
            {cart.map((item, index) => {
              return <CartItem item={item} itemIndex={index} key={item.id} />;
            })}
          </div>

          <div className="mt-20 mr-60 flex flex-col justify-between h-[500px]">
            <div>
              <div className="text-green-700 font-extrabold text-2xl ">
                YOUR CART
              </div>
              <div className="text-green-700 font-extrabold text-5xl">
                SUMMARY
              </div>
              <p className="font-bold mt-6 text-xl ">
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="font-bold mt-6 text-xl mb-6">
                Total Amount : ${totalAmount}
              </p>
              <button className=" bg-green-800 rounded-md text-white font-bold text-2xl p-3">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col mt-[15rem]">
          <h1 className="font-bold text-3xl text-green-600 mb-5">Cart Empty</h1>
          <Link to={"/"}>
            <button
              className="bg-green-700 text-2xl text-white pl-[5rem] pr-[5rem] pt-2 pb-2 
            
            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 ..."
            >
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
