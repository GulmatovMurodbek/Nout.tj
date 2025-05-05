"use client"
import { useEffect, useState } from "react"
import {
  Heart,
  Share2,
  ShoppingCart,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
  Cpu,
  HardDrive,
  Monitor,
  Laptop,
  CircleAlert,
} from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "@/entities/store/store"
import { getProductById, getProducts } from "@/entities/api/api"
import { useParams } from "next/navigation"
import Productscard from "../../(home)/productsCard"
export default function InfoPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  const product = useSelector((store: any) => store.logic.info)
  const products = useSelector((store: any) => store.logic.products)
  const dispatch = useDispatch<AppDispatch>()

  const params = useParams()
  const id: any = params?.id?.toString()

  useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getProducts())
  }, [dispatch])
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product information...</p>
        </div>
      </div>
    )
  }

  const features = [
    { icon: <Laptop className="h-5 w-5" />, name: "Brand", value: product.brand },
    { icon: <Cpu className="h-5 w-5" />, name: "Processor", value: product.processor },
    { icon: <HardDrive className="h-5 w-5" />, name: "Memory", value: product.memory },
    { icon: <Monitor className="h-5 w-5" />, name: "Screen Size", value: product.screenSize },
  ]
  const specifications = [
    { name: "Brand", value: product.brand },
    { name: "Model", value: "Latitude 3000 Series" },
    { name: "Processor", value: product.processor },
    { name: "Memory", value: product.memory },
    { name: "Screen Size", value: product.screenSize },
    { name: "Operating System", value: "Windows 11 Pro" },
    { name: "Graphics Card", value: "Intel Iris Xe" },
    { name: "Storage", value: "512GB SSD" },
    { name: "Battery Life", value: "Up to 10 hours" },
    { name: "Weight", value: "1.4 kg" },
  ]
  
  return (
    <div className="bg-gray-50 min-h-screen py-10 my-[20px]">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-gray-900">
            Laptops
          </a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-gray-900">
            Dell
          </a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">{product.productName}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-3/5 p-6">
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img
                src={
                  product.images && product.images.length > 0
                    ? product.images[selectedImage]
                    : "/placeholder.svg?height=400&width=600"
                }
                alt={`${product.productName} - View ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
              {product.inStock && (
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  In Stock
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images && product.images.length > 0 ? (
                product.images.map((image: any, index: any) => (
                  <div
                    key={index}
                    className={`aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-400 text-xs">No images</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-2/5 p-6 lg:py-10 flex flex-col">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  ${product.price}
                  {product.newPrice && Number(product.newPrice) > Number(product.price) && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.newPrice}</span>
                  )}
                </p>
                <p className="text-green-600 text-sm">{product.delivery}</p>
              </div>

              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600">{product.about}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                  <div className="flex gap-3">
                    {product.colors && product.colors.length > 0 ? (
                      product.colors.map((color: string) => (
                        <div
                          key={color}
                          className={`w-8 h-8 rounded-full border border-gray-200`}
                          style={{
                            backgroundColor:
                              color === "black"
                                ? "#000"
                                : color === "grey"
                                  ? "#888"
                                  : color === "white"
                                    ? "#fff"
                                    : color,
                          }}
                        ></div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-500">No color options available</div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center border border-gray-300 rounded-lg w-32">
                    <button
                      className="px-3 py-1 text-gray-500 hover:text-gray-700"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="flex-1 text-center">{quantity}</span>
                    <button
                      className="px-3 py-1 text-gray-500 hover:text-gray-700"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">{feature.icon}</div>
                    <div>
                      <p className="text-xs text-gray-500">{feature.name}</p>
                      <p className="font-medium">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium capitalize whitespace-nowrap ${
                    activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Dell Latitude 3000</h3>
                <p className="mb-4">{product.about}</p>
                <p className="mb-4">
                  With 16GB of memory, you'll experience smooth performance even when running multiple applications
                  simultaneously. The Latitude 3000 features a sleek design available in black or grey, and includes
                  Dell's renowned business-class durability and security features.
                </p>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>14-inch display for comfortable viewing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>Intel Core i5 processor for reliable performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>16GB memory for smooth multitasking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>Business-class security features</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>Long battery life for all-day productivity</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Learn more about Dell Latitude laptops
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">{spec.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex items-start p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3">
                    <CircleAlert className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Note about specifications</p>
                    <p>
                      Specifications may vary by region and configuration. Please check with your local Dell
                      representative for exact details.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Write a Review
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="text-5xl font-bold text-gray-900 mb-2">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-gray-500">{product.reviews} reviews</div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="space-y-1">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        // Calculate percentage for each rating (mock data)
                        const percentage =
                          rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1

                        return (
                          <div key={rating} className="flex items-center">
                            <div className="flex items-center w-24">
                              <span className="text-sm text-gray-600">{rating} stars</span>
                            </div>
                            <div className="flex-1 h-2 mx-4 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-yellow-400 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <div className="w-16 text-right text-sm text-gray-600">{percentage}%</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah Johnson",
                      rating: 5,
                      date: "2 months ago",
                      title: "Excellent business laptop",
                      comment:
                        "I've been using the Dell Latitude 3000 for two months now and it's perfect for my business needs. The battery life is impressive and performance is consistently good. Would definitely recommend to other professionals.",
                    },
                    {
                      name: "Michael Chen",
                      rating: 4,
                      date: "1 month ago",
                      title: "Great value for the features",
                      comment:
                        "This laptop offers a lot of value for the price point. The 16GB RAM makes multitasking seamless. Only giving 4 stars because the fan can get a bit loud under heavy load.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-b-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h4 className="font-medium mb-1">{review.title}</h4>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter((e:any)=>e.brend==product.brend).slice(0,3).map((product:any) => (
              <Productscard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}