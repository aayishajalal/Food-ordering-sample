import React from "react";
import { useCart } from "../../hooks/useCart";

const Cart = () => {
  const { cart, addCart, removeCart, updateCart, clearCart } = useCart();
  {
    return cart.length === 0 ? (
      <p>Cart Empty</p>
    ) : (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto">
            {/* <pre>{JSON.stringify(cart)}</pre> */}
            <div className="space-y-5">
              <p className="bg-green-500 text-xl">Cart Items: {cart.length}</p>
              <button
                onClick={() => {
                  clearCart();
                }}
                className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded flex gap-2 items-center my-5"
              >
                Clear Cart
              </button>

              {cart.map((e) => {
                return (
                  <>
                    <div className="grid grid-col-1 shadow-lg rounded-xl p-5">
                      <div className="flex items-center justify-between">

                        <img
                          src={e.image_url}
                          alt={e.title}
                          className="h-72 rounded-xl"
                        />
                        <p>{e.title}</p>
                        <div className="flex">
                          <button onClick={updateCart(e.id)}>+</button>
                        </div>
                        <button
                          onClick={() => {
                            removeCart(e.id);
                          }}
                          className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded flex gap-2 items-center"
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
