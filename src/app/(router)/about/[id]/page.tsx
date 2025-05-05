"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  Share2,
  ShoppingBag,
  Star,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productscard from "../../(home)/productsCard";
import type { AppDispatch } from "@/entities/store/store";
import { getBrendByID, getProducts } from "@/entities/api/api";

export default function BrandPage() {
  const params = useParams();
  const id: any = params?.id?.toString();
  const [activeImage, setActiveImage] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const brand = useSelector((store: any) => store.logic.brendById);
  const product = useSelector((store: any) => store.logic.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBrendByID(id));
  }, [dispatch, id]);

  if (!brand) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Brand Not Found</h1>
        <p className="text-gray-600 mb-8">
          The brand you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/brands">View All Brands</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-r from-rose-50 to-rose-100">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-rose-600 mb-6">
                Brand Spotlight
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {brand.brendName}
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                {brand.about && brand.about.substring(0, 120)}...
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-rose-600 hover:bg-rose-700">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Shop Products
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Share Brand
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 bg-white rounded-full p-8 shadow-xl">
                <img
                  src={brand.brandimage || "/placeholder.svg"}
                  alt={brand.brendName}
                  className="object-contain p-8 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-rose-600" />
              <h3 className="text-sm font-medium text-gray-500">Founded</h3>
              <p className="text-xl font-bold">{brand.founded}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-rose-600" />
              <h3 className="text-sm font-medium text-gray-500">
                Headquarters
              </h3>
              <p className="text-xl font-bold">{brand.headquarters}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <Users className="h-8 w-8 mx-auto mb-3 text-rose-600" />
              <h3 className="text-sm font-medium text-gray-500">Employees</h3>
              <p className="text-xl font-bold">{brand.employees}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <Globe className="h-8 w-8 mx-auto mb-3 text-rose-600" />
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <p className="text-xl font-bold">{brand.revenue}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {brand.brendName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>{brand.about}</p>
                <p className="mt-4">
                  Under the leadership of {brand.ceo}, {brand.brendName}{" "}
                  continues to innovate and expand its global presence, focusing
                  on cutting-edge technology and sustainable practices.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                {/* <ul className="space-y-3">
                  {brand.values &&
                    brand.values.map((value: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                          <div className="h-2 w-2 rounded-full bg-rose-600"></div>
                        </div>
                        <span>{value}</span>
                      </li>
                    ))}
                </ul> */}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://www.freeiconspng.com/thumbs/laptop-png/mac-laptop-png-13.png"
                  alt={`${brand.brendName} headquarters`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/048/220/014/small/modern-laptop-with-blank-screen-free-png.png"
                    alt={`${brand.brendName} product`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/008/534/666/small/laptop-computer-mockup-cutout-file-png.png"
                    alt={`${brand.brendName} team`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our History
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-200"></div>
            <div className="space-y-12">
              {brand.history &&
                brand.history.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } relative`}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-rose-600 border-4 border-white flex items-center justify-center text-white font-bold z-10">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pl-10 text-left" : "pr-10 text-right"
                      } bg-white p-6 rounded-xl shadow-lg`}
                    >
                      <div className="text-rose-600 font-bold text-xl mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative products that have made {brand.brendName}{" "}
              a leader in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product && product.length > 0 ? (
              product
                .filter(
                  (e: any) =>
                    e.brand &&
                    brand.brendName &&
                    e.brand.toLowerCase() === brand.brendName.toLowerCase()
                )
                .map((product: any) => (
                  <Productscard key={product.id} product={product} />
                ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">
                  No products available for this brand at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.testimonials &&
              brand.testimonials.map((testimonial: any, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Button variant="outline">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.news &&
              brand.news.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="aspect-video relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                    <Button variant="link" className="p-0 h-auto text-rose-600">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {brand.brendName} collaborates with leading companies to deliver
            exceptional products and services.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brand.partnerships &&
              brand.partnerships.map((partner: string, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-gray-500">
                      {partner}
                    </span>
                  </div>
                  <p className="font-medium">{partner}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.awards &&
              brand.awards.map((award: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{award.award}</h3>
                  <p className="text-gray-500">{award.year}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Brand Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {brand.gallery &&
              brand.gallery.map((image: string, index: number) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${brand.brendName} gallery image ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {brand.faq &&
              brand.faq.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Follow {brand.brendName} on social media for the latest updates,
            promotions, and more.
          </p>
          {brand.socialMedia && (
            <div className="flex justify-center space-x-8">
              <a
                href={brand.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-8 w-8" />
              </a>
              <a
                href={brand.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-8 w-8" />
              </a>
              <a
                href={brand.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-8 w-8" />
              </a>
              <a
                href={brand.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href={brand.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-8 w-8" />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
