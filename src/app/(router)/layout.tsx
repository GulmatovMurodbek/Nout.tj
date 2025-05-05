"use client";

import type React from "react";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Phone,
  Menu,
} from "lucide-react";
import { useState, Suspense, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/entities/api/api";
import { AppDispatch } from "@/entities/store/store";
import { useTranslation } from "react-i18next";

const cartItems:any = JSON.parse(localStorage.getItem("cart")) || [];
let totalCart = cartItems.reduce((acc:any, el:any) => acc + el.count,0);
export default function ClientLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  let brend = useSelector((state: any) => state.logic.brend);
  let dispatch = useDispatch<AppDispatch>();
  let [count,setCount]=useState(totalCart)
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <div className="h-[110px]">
        <header className="w-full border-b bg-white z-50 fixed shadow">
          <div className="bg-indigo-950 text-white">
            <div className="mx-auto max-w-7xl py-2 px-4 lg:px-6">
              <div className="flex items-center justify-around lg:justify-between text-sm">
                <div className="hidden md:flex items-center gap-6">
                  <Link
                    href="/about"
                    className="text-indigo-200 hover:text-white transition"
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href={"/shiping"}
                    className="text-indigo-200 hover:text-white transition"
                  >
                    {t("shiping")}
                  </Link>
                  <Link
                    href="/warranty"
                    className="text-indigo-200 hover:text-white transition"
                  >
                    {t("Warranty")}
                  </Link>
                  <Link
                    href="/contacts"
                    className="text-indigo-200 hover:text-white transition"
                  >
                    {t("Contacts")}
                  </Link>
                </div>
                <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-end">
                  <div className="flex items-center">
                    <Phone className="mr-1 h-3 w-3 text-indigo-300" />
                    <span className="text-xs sm:text-sm">
                      +992 072-70-45-45
                    </span>
                  </div>
                  <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="text-xs bg-[#020275] p-[3px] rounded-2xl sm:text-sm"
                  >
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="tj">Точики</option>
                  </select>
                  <Link
                    href="/account"
                    className="text-indigo-200 hover:text-white transition hidden sm:block"
                  >
                    {t("PersonalAccount")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-4 px-4 lg:px-6">
              <div className="flex items-center justify-between">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden text-zinc-700"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">{t("Menu")}</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                    <nav className="flex flex-col gap-4 mt-8">
                      <Link
                        href="/about"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md"
                      >
                        {t("AboutCompony")}
                      </Link>
                      <Link
                        href="/delivery"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md"
                      >
                        {t("shiping")}
                      </Link>
                      <Link
                        href="/warranty"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md"
                      >
                        {t("Warranty")}
                      </Link>
                      <Link
                        href="/contacts"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md"
                      >
                        {t("Contacts")}
                      </Link>
                      <div className="h-px bg-zinc-200 my-2"></div>
                      {brend?.map((e: any) => {
                        return (
                          <Link
                            key={e.id}
                            href={`/about/${e.id}`}
                            className="flex items-center text-sm font-medium text-zinc-700 hover:text-indigo-600 transition whitespace-nowrap"
                          >
                            {e.brendName}
                          </Link>
                        );
                      })}
                      <Link
                        href="/promotions"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md"
                      >
                        {t("Promotions")}
                      </Link>
                      <Link
                        href="/product"
                        className="px-2 py-1 hover:bg-indigo-50 rounded-md text-indigo-600"
                      >
                        {t("PriceList")}
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-10 w-auto flex items-center">
                    <span className="text-[25px]">N </span>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/234/234724.png"
                      alt="Surat Logo"
                      className="h-[20px] w-auto relative top-[2px] left-[3px]"
                    />
                    <span className="text-[25px] ml-[4px]"> ut.tj </span>
                  </div>
                </Link>
                <div
                  className={` w-full max-w-md mx-4 transition hidden lg:flex ${
                    isSearchFocused ? "scale-105" : ""
                  }`}
                >
                  <Input
                    type="text"
                    placeholder="Введите поисковой запрос..."
                    className="rounded-s-xl rounded-e-none border-e-0 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:ring-offset-0 border-zinc-300"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <Button className="rounded-e-xl rounded-s-none bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition duration-300 border-0">
                    <Search className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">{t("find")}</span>
                  </Button>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                      <Heart className="h-6 w-6 text-zinc-600 group-hover:text-indigo-600 transition" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-pink-500 to-rose-500 group-hover:from-pink-600 group-hover:to-rose-600 transition">
                        1
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                      <Link href={'/cart'}>
                      <ShoppingCart className="h-6 w-6 text-zinc-600 group-hover:text-indigo-600 transition" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-pink-500 to-rose-500 group-hover:from-pink-600 group-hover:to-rose-600 transition">
                        {count}
                      </Badge>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-t hidden md:block">
            <div className="mx-auto max-w-7xl py-3 px-4 lg:px-6 overflow-x-auto">
              <nav className="flex items-center justify-between min-w-max">
                <div className="flex items-center gap-6 min-w-max">
                  {brend?.map((e: any) => {
                    return (
                      <Link
                        key={e.id}
                        href={`/about/${e.id}`}
                        className="flex items-center text-sm font-medium text-zinc-700 hover:text-indigo-600 transition whitespace-nowrap"
                      >
                        {e.brendName}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex items-center gap-6 min-w-max">
                  <Link
                    href="/promotions"
                    className="text-sm font-medium text-zinc-700 hover:text-indigo-600 transition whitespace-nowrap"
                  >
                    {t("Promotions")}
                  </Link>
                  <Link
                    href="/product"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition whitespace-nowrap"
                  >
                    {t("PriceList")}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <main className="flex-1 w-full">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}
