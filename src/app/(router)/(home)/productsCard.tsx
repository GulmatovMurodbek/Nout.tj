"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ShoppingCart,
  Heart,
  Share2,
  Info,
  Star,
} from "lucide-react";
import {addProductToCart} from '../../../../cart'
import {addToFavorites} from '../../../../favorite'
import Link from "next/link";
interface ProductData {
  id: string;
  productName: string;
  colors: string[];
  price: string;
  newPrice: string;
  images: string[];
  category: string;
  memory: string;
  brand: string;
  about: string;
  screenSize: string;
  processor: string;
}
const Productscard = ({ product ,key}: { product: ProductData,key:string }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };
  return (
    <div key={key} className="w-[360px] max-w-[300px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="relative h-64 bg-gray-100 p-[10px]">
      <img 
        src={product.images[currentImage]} 
        alt={product.productName}
        className="w-[100%] h-full rounded-[10px] "
      />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button 
          onClick={prevImage}
          className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {product.images.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      
      <button 
        onClick={toggleLiked}
        className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
      >
        <Heart onClick={()=>addToFavorites(product)}  size={20} className={liked ? "fill-red-500 text-red-500" : "text-gray-500"} />
      </button>
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{product.brand}</span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">{product.productName}</h2>
        </div>
        <div className="flex items-center bg-blue-100 px-2 py-1 rounded-lg">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-semibold ml-1">4.8</span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
          {product.processor}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
          {product.memory}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
          {product.screenSize}
        </span>
      </div>
      
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-2">Available colors:</p>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <div 
              key={color}
              className={`w-6 h-6 rounded-full border border-gray-300 bg-${color === "black" ? "black" : "gray-400"}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          {product.newPrice && product.newPrice !== product.price && (
            <p className="text-sm text-gray-500 line-through">${product.newPrice}</p>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Link href={`/product/${product.id}`}>
            <Info size={20} className="text-gray-600" />
            </Link>
          </button>
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <ShoppingCart size={18} className="mr-2" />
            <span className="font-medium" onClick={()=>addProductToCart(product)}>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Productscard;
