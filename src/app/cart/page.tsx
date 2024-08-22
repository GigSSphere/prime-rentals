"use client";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import WishItems from "../components/WishItems";
import Footer from "../components/Footer";

const Cart = () => {
  const cartitems = useSelector((state: IRootState) => state.cart.cartItems);
  console.log(cartitems);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {cartitems.map((item) => (
            <WishItems
              key={item.item.id}
              item={item.item}
              
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
