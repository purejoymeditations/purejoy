import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const currencyFormatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

const CartPage = () => {
  const { items, itemCount, totalPrice, updateQty, removeItem, clearCart } =
    useCart();

  if (itemCount === 0) {
    return (
      <section className="min-h-[70vh] bg-background flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-yellow-100 max-w-lg">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <ShoppingCart size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl font-serif text-text-primary mb-3">
            Your cart is empty
          </h1>
          <p className="text-text-secondary mb-6">
            Explore our handcrafted collection and add items that speak to your
            ritual.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary-hover transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-primary mb-3">
            Cart
          </p>
          <h1 className="text-4xl font-serif text-text-primary mb-4">
            Your Sanctuary Basket
          </h1>
          <p className="text-text-secondary">
            {itemCount} item{itemCount > 1 ? "s" : ""} •{" "}
            {currencyFormatter.format(totalPrice)}
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {items.map((item) => {
              const atMax = item.quantity >= item.maxQty;
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 bg-secondary/10">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-text-secondary">
                          <ShoppingCart />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-wide text-primary">
                            {item.category}
                          </p>
                          <h2 className="text-2xl font-serif text-text-primary">
                            {item.name}
                          </h2>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-text-secondary hover:text-red-500 transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition ${
                              item.quantity > 1
                                ? "hover:border-primary hover:text-primary"
                                : "opacity-40 cursor-not-allowed"
                            }`}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus size={16} />
                          </button>
                          <div className="min-w-[3rem] text-center font-semibold text-text-primary">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity + 1)
                            }
                            disabled={atMax}
                            className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition ${
                              !atMax
                                ? "hover:border-primary hover:text-primary"
                                : "opacity-40 cursor-not-allowed"
                            }`}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-text-secondary">
                            Unit price: {currencyFormatter.format(item.price)}
                          </p>
                          <p className="text-2xl font-bold text-text-primary">
                            {currencyFormatter.format(
                              item.price * item.quantity
                            )}
                          </p>
                          {atMax && (
                            <p className="text-xs text-amber-600 mt-1">
                              Limited to {item.maxQty} per order.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={clearCart}
                className="px-5 py-2 rounded-full border border-gray-300 text-text-secondary hover:border-red-400 hover:text-red-500 transition"
              >
                Clear Cart
              </button>
              <Link
                to="/shop"
                className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <aside className="w-full lg:w-80 bg-white rounded-2xl shadow-lg border border-yellow-100 h-fit p-6">
            <h3 className="text-xl font-serif text-text-primary mb-4">
              Order Summary
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{currencyFormatter.format(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">
                  Calculated at next step
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 my-4 pt-4">
              <div className="flex justify-between text-lg font-semibold text-text-primary">
                <span>Total</span>
                <span>{currencyFormatter.format(totalPrice)}</span>
              </div>
            </div>
            <button
              className="w-full py-3 rounded-full bg-logo-gold text-white font-semibold uppercase tracking-widest shadow-lg hover:shadow-xl transition"
              disabled
            >
              Checkout Coming Soon
            </button>
            <p className="text-xs text-text-secondary mt-3">
              We’ll keep your cart safe while you continue exploring Pure Joy’s
              offerings.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
