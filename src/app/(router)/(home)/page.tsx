"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCategory, getProductById, getProducts } from "@/entities/api/api";
import { AppDispatch } from "@/entities/store/store";
import {
  ArrowRight,
  Battery,
  Clock,
  Cpu,
  HardDrive,
  Mail,
  Monitor,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Productscard from "./productsCard";
import { Input } from "@/components/ui/input";

const Home = () => {
  let brend = useSelector((store: any) => store.logic.brend);
  let product = useSelector((store: any) => store.logic.products);
  let { t } = useTranslation();
  let dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
    dispatch(getProductById("1"))
  }, [dispatch]);
  return (
    <>
      <section className="bg-[#0f3c67] text-white px-[30px] md:py-15">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-blue-400 hover:bg-blue-500">
              {t("newArrives")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("discoverthe")}
            </h1>
            <p className="text-lg text-blue-100">{t("exploreOur")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                {t("shopNow")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-[#0f3c67] hover:bg-white hover:text-[#0f3c67]"
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>
          <div className="relative ml-[15px] top-[25px]">
            <div className="absolute -inset-4 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://www.pngmart.com/files/7/HP-Laptop-PNG-Transparent-Image.png"
              alt="Premium Laptop"
              width={600}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a2540]">
            {t("broweByCategoey")}
          </h2>
          <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of premium technology brands, each offering innovative products and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {brend.map((brand:any) => (
            <Link key={brand.id} href={`/about/${brand.id}`} className="block group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src={brand.brandimage || "/placeholder.svg"}
                      alt={brand.brendName}
                      className="object-contain p-8"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{brand.brendName}</h2>
                  <Button className="w-full group-hover:bg-rose-600">
                    View Brand <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
        </div>
      </section>
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
          {t("feautresLaptops")}
        </h2>
        <p className="text-muted-foreground max-w-[600px]">
          {t("ourMostPopular")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center ">
        {product?.slice(0, 3).map((product: any) => {
          return <Productscard key={product.id} product={product} />;
        })}
      </div>
      <section className="py-12 bg-[#0f3c67] mt-[20px]">
        <div className="p-[20px]">
          <div className=" ml-[15px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <Badge variant="outline" className="border-white text-white">
                {t("limitedTime")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("specialSummerSale")}
              </h2>
              <p className="text-white/80 max-w-[500px]">{t("getUpToOff")}</p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-white text-[#0f3c67] hover:bg-white/90">
                  {t("shopNow")}
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-[#0f3c67] hover:bg-white/10"
                >
                  {t("LearnMore")}
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://1000logos.net/wp-content/uploads/2023/07/Lenovo-Yoga-9i-Gen-8.png"
                alt="Special Offer"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2 flex">
              {t("WhyChoose")}
              <div className="h-10 w-auto flex items-center ml-[10px]">
                <span className="text-[25px]">N </span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/234/234724.png"
                  alt="Surat Logo"
                  className="h-[20px] w-auto relative top-[2px] left-[3px]"
                />
                <span className="text-[25px] ml-[4px]"> ut.tj </span>
              </div>
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
             {t("WeOffer")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Free Shipping",
                description: "Free shipping on all orders over $999",
                icon: "truck",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer service",
                icon: "headphones",
              },
              {
                title: "Easy Returns",
                description: "30-day hassle-free return policy",
                icon: "refresh-ccw",
              },
              {
                title: "Secure Payment",
                description: "Multiple secure payment options",
                icon: "shield",
              },
            ].map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-[#0f3c67]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                    <div className="text-[#0f3c67]">
                      {feature.icon === "truck" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                          <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                          <circle cx="7" cy="18" r="2" />
                          <circle cx="17" cy="18" r="2" />
                        </svg>
                      )}
                      {feature.icon === "headphones" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-4.95 3.05-9 8-9s8 4.05 8 9v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2" />
                        </svg>
                      )}
                      {feature.icon === "refresh-ccw" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 2v6h6" />
                          <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
                          <path d="M21 22v-6h-6" />
                          <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
                        </svg>
                      )}
                      {feature.icon === "shield" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
              {t("PopularBrands")}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              {t("wePartnerWith")}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {brend.slice(0, 6).map((brend: any) => (
              <div
                key={brend.id}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={brend.brandimage}
                  alt={brend.brandimage}
                  width={120}
                  height={60}
                  className="rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
              {t("CompareSpecifications")}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
            {t("FindThe")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Entry Level",
                price: "$599",
                specs: [
                  {
                    icon: <Cpu className="h-4 w-4" />,
                    label: "Intel i3 / AMD Ryzen 3",
                  },
                  {
                    icon: <HardDrive className="h-4 w-4" />,
                    label: "8GB RAM, 256GB SSD",
                  },
                  {
                    icon: <Monitor className="h-4 w-4" />,
                    label: '14" HD Display',
                  },
                  {
                    icon: <Battery className="h-4 w-4" />,
                    label: "Up to 8 hours battery",
                  },
                ],
              },
              {
                name: "Mid Range",
                price: "$899",
                specs: [
                  {
                    icon: <Cpu className="h-4 w-4" />,
                    label: "Intel i5 / AMD Ryzen 5",
                  },
                  {
                    icon: <HardDrive className="h-4 w-4" />,
                    label: "16GB RAM, 512GB SSD",
                  },
                  {
                    icon: <Monitor className="h-4 w-4" />,
                    label: '15.6" FHD Display',
                  },
                  {
                    icon: <Battery className="h-4 w-4" />,
                    label: "Up to 10 hours battery",
                  },
                ],
              },
              {
                name: "Performance",
                price: "$1299",
                popular: true,
                specs: [
                  {
                    icon: <Cpu className="h-4 w-4" />,
                    label: "Intel i7 / AMD Ryzen 7",
                  },
                  {
                    icon: <HardDrive className="h-4 w-4" />,
                    label: "16GB RAM, 1TB SSD",
                  },
                  {
                    icon: <Monitor className="h-4 w-4" />,
                    label: '15.6" QHD Display',
                  },
                  {
                    icon: <Battery className="h-4 w-4" />,
                    label: "Up to 12 hours battery",
                  },
                ],
              },
              {
                name: "Premium",
                price: "$1999",
                specs: [
                  {
                    icon: <Cpu className="h-4 w-4" />,
                    label: "Intel i9 / AMD Ryzen 9",
                  },
                  {
                    icon: <HardDrive className="h-4 w-4" />,
                    label: "32GB RAM, 2TB SSD",
                  },
                  {
                    icon: <Monitor className="h-4 w-4" />,
                    label: '16" 4K Display',
                  },
                  {
                    icon: <Battery className="h-4 w-4" />,
                    label: "Up to 15 hours battery",
                  },
                ],
              },
            ].map((tier) => (
              <Card
                key={tier.name}
                className={`overflow-hidden ${
                  tier.popular ? "border-[#0f3c67] border-2" : ""
                }`}
              >
                {tier.popular && (
                  <div className="bg-[#0f3c67] text-white text-center py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="text-2xl font-bold text-[#0f3c67] mt-2">
                    {tier.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#0f3c67]">{spec.icon}</span>
                        <span className="text-sm">{spec.label}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0f3c67] hover:bg-[#0f3c67]/90">
                  {t("ViewOptions")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
              {t("CustomerReviews")}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
             {t("SeeWhat")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Graphic Designer",
                review:
                  "The CreatorBook Studio has transformed my workflow. The display is stunning and performance is exceptional for design work.",
                rating: 5,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
              },
              {
                name: "Michael Chen",
                role: "Software Developer",
                review:
                  "I've been using the ProBook X5 for 6 months now and it handles all my development tasks with ease. Battery life is impressive too.",
                rating: 4,
                image:
                  "https://t3.ftcdn.net/jpg/02/54/79/62/360_F_254796249_DsqQcIKxQEdd2WcwzblTSBF9p3MdkQJo.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Student",
                review:
                  "The UltraSlim 7 is perfect for my college needs. Lightweight, fast, and the price was right within my budget.",
                rating: 5,
                image:
                  "https://t3.ftcdn.net/jpg/07/64/40/98/360_F_764409867_iXpBxs90ZimTFHobmqvOaTtuJHJgHPOR.jpg",
              },
            ].map((review) => (
              <Card key={review.name} className="text-center">
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-4">
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{review.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-[#0f3c67] text-[#0f3c67]"
            >
              {t("ViewAllReviews")}
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0f3c67]">
        <div className="px-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
              <p className="text-white/80 max-w-[500px]">
                {t("SubscribeToUor")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button className="bg-white text-[#0f3c67] hover:bg-white/90">
               {t("Subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
              {t("LatestTechNews")}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
             {t("StayInformed")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Choose the Right Laptop for Your Needs",
                excerpt:
                  "A comprehensive guide to help you make the best decision when purchasing a new laptop.",
                date: "May 1, 2025",
                image:
                  "https://media.wired.com/photos/66d4713537f07a518551fdd7/16:9/w_2000,h_1125,c_limit/How%20to%20Buy%20A%20Laptop%20Abstract%20Background%20%20082024%20SOURCE.jpg",
              },
              {
                title: "Top 10 Laptop Accessories for Productivity",
                excerpt:
                  "Enhance your laptop experience with these must-have accessories for work and play.",
                date: "April 25, 2025",
                image:
                  "https://www.regait.com/wp-content/uploads/2025/03/acce-1170x635.png",
              },
              {
                title: "The Future of Laptop Technology: What to Expect",
                excerpt:
                  "Explore upcoming trends and innovations that will shape the next generation of laptops.",
                date: "April 18, 2025",
                image:
                  "https://electrogadgetplus.com/wp-content/uploads/2024/10/Virtual-Reality-VR-Laptops-1024x536.png",
              },
            ].map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <div className="relative p-[10px]">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-[200px] rounded-xl"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-[#0f3c67] p-0 hover:bg-transparent hover:underline"
                  >
                    {t("ReadMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3c67] mb-2">
             {t("FrequentlyAskedQuestions")}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              {t("FindAnswer")}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy on all our products. Items must be in their original condition with all packaging and accessories.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location.",
              },
              {
                question: "How long is the warranty period?",
                answer:
                  "All our laptops come with a standard 1-year manufacturer warranty. Extended warranty options are available at checkout.",
              },
              {
                question: "Can I upgrade my laptop after purchase?",
                answer:
                  "Most of our laptops allow for RAM and storage upgrades. Check the product specifications or contact our support team for details.",
              },
              {
                question: "Do you offer student discounts?",
                answer:
                  "Yes, we offer special discounts for students with valid ID. Contact our customer service for more information.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery status.",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="bg-[#0f3c67] hover:bg-[#0f3c67]/90">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="">
          <div className="bg-[#0f3c67] rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                 {t("ReadyToFindYour")}
                </h2>
                <p className="text-white/80 max-w-[500px]">
                 {t("BrowseOur")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-white text-[#0f3c67] hover:bg-white/90">
                    {t("ShopNow")}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-[#0f3c67] hover:bg-white/10"
                  >
                   {t("ViewDeals")}
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-22.png"
                  alt="Call to Action"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
