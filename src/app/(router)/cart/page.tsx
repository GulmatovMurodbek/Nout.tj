"use client";
import { useState, useEffect } from "react";
import { Trash2, ShoppingBag, Plus, Minus,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    setLoading(false);

    const total = storedCart.reduce((sum: any, item: any) => {
      return sum + Number(item.newPrice) * item.count;
    }, 0);
    setTotalPrice(total);
  }, []);

  const updateQuantity = (id: any, newCount: any) => {
    if (newCount < 1) return;

    const updatedCart: any = cartItems.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const total = updatedCart.reduce((sum: any, item: any) => {
      return sum + Number(item.newPrice) * item.count;
    }, 0);
    setTotalPrice(total);
  };

  const removeItem = (id:any) => {
    const updatedCart = cartItems.filter((item:any) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const total = updatedCart.reduce((sum: any, item: any) => {
      return sum + Number(item.newPrice) * item.count;
    }, 0);
    setTotalPrice(total);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setTotalPrice(0);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading cart...</div>
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8 mt-[20px]">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <ShoppingBag className="h-8 w-8" />
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 mt-[20px]">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link href="/product">
          <Button>Continue Shopping</Button>
          </Link>
          
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="px-6">
                <div className="flex justify-between items-center">
                  <CardTitle>Cart Items ({cartItems.length})</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700"
                  >
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-6">
                {cartItems.map((item: any) => (
                  <div key={item.id}>
                    <div className="flex flex-col sm:flex-row gap-4 py-4">
                      <div className="w-full sm:w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                        {item.images[0] && item.images.length > 0 ? (
                          <img
                            src={item.images[0]}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ShoppingBag className="h-8 w-8 text-gray-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.productName}</h3>
                          <p className="font-semibold">${item.newPrice}</p>
                        </div>

                        <div className="mt-1 flex flex-wrap gap-2">
                          {item.brand && (
                            <Badge variant="outline">{item.brand}</Badge>
                          )}
                          {item.memory && (
                            <Badge variant="outline">{item.memory}</Badge>
                          )}
                          {item.processor && (
                            <Badge variant="outline">{item.processor}</Badge>
                          )}
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center border rounded">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() =>
                                updateQuantity(item.id, item.count - 1)
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">
                              {item.count}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() =>
                                updateQuantity(item.id, item.count + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger>
                    <Button className="w-full">Checkout Now</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                       <Input placeholder="Enter your name" className="mt-[10px]"/>
                       <Input placeholder="Enter your email" className="mt-[10px]"/>
                       <Input placeholder="Enter your phone" className="mt-[10px]"/>
                       <Input placeholder="Enter your location" className="mt-[10px]"/>
                       <h1 className="mt-[20px]"> <span className="text-[25px]">Total :</span> <span className="text-[20px]">{totalPrice} $</span></h1>
                       <Button className="mt-[20px]" onClick={()=>localStorage.removeItem("cart")}>Bay</Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
