"use client";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AppDispatch } from "@/entities/store/store";
import { getCategory, getProducts } from "@/entities/api/api";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Productscard from "../(home)/productsCard";

import { 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Search, 
  Star, 
  SlidersHorizontal, 
  X, 
  Grid3x3, 
  List, 
  ArrowUpDown, 
  Trash2,
  RefreshCw
} from "lucide-react";

const Productpage = () => {
  const products = useSelector((store:any) => store.logic.products);
  const brands = useSelector((store:any) => store.logic.brend);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, [dispatch]);

  const priceRange2:any = useMemo(() => {
    if (!products || products.length === 0) return [0, 5000];
    
    const prices = products.map((product: any) => Number(product.price));
    return [
      Math.floor(Math.min(...prices)),
      Math.ceil(Math.max(...prices))
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    return products.filter((product: any) => {
      const matchesSearch = searchQuery === "" || 
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.about.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesBrand = selectedBrands.length === 0 || 
        selectedBrands.includes(product.brand);
      
      const price = Number(product.price);
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      
      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [products, searchQuery, selectedBrands, priceRange]);

  const sortedProducts = useMemo(() => {
    if (filteredProducts.length === 0) return [];
    
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "priceLow":
          return Number(a.price) - Number(b.price);
        case "priceHigh":
          return Number(b.price) - Number(a.price);
        case "nameAsc":
          return a.productName.localeCompare(b.productName);
        case "nameDesc":
          return b.productName.localeCompare(a.productName);
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default: 
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProducts, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedBrands([]);
    setPriceRange(priceRange2);
    setSortBy("featured");
    setCurrentPage(1);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
    setCurrentPage(1);
  }
  const renderPagination = () => {
    if (totalPages <= 1) return null
    return (
      <div className="flex  justify-center items-center gap-2 mt-8">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full h-10 w-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="icon"
                className={`rounded-full h-10 w-10 ${currentPage === pageNum ? 'shadow-md' : ''}`}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full h-10 w-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  const ProductListItem = ({ product }: { product: any }) => (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-48 h-48 bg-gray-100 flex items-center justify-center p-4">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.productName} 
              className="max-h-full max-w-full object-contain" 
            />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </div>
        <CardContent className="flex-1 p-4">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {product.productName}
                </h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-yellow-500 stroke-yellow-500 h-4 w-4" />
                  <span className="text-sm">
                    {product.rating ? product.rating : '4.5'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                {product.about}
              </p>
              <Badge variant="outline" className="mb-4">
                {product.brand}
              </Badge>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-xl">${product.price}</span>
              <Button size="sm">
                {t("viewDetails")}
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );

  // Desktop filters sidebar component
  const FiltersSidebar = () => (
    <div className="w-64 hidden md:block sticky top-20 h-fit">
      <Card className="overflow-hidden">
        <CardContent className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{t("filters")}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="h-8 w-8 p-0"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("resetFilters")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">{t("brands")}</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {brands && brands.map((brand: any) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.brendName)}
                    onCheckedChange={() => toggleBrand(brand.brendName)}
                    className="rounded-sm"
                  />
                  <label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer flex-1 truncate">
                    {brand.brendName}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="my-2" />
          
          <div>
            <h3 className="font-medium mb-3">{t("priceRange")}</h3>
            <Slider
              defaultValue={priceRange}
              min={priceRange2[0]}
              max={priceRange2[1]}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex justify-between items-center gap-4">
              <div className="bg-gray-50 rounded p-2 text-sm flex-1 text-center">
                ${priceRange[0]}
              </div>
              <span className="text-gray-400">-</span>
              <div className="bg-gray-50 rounded p-2 text-sm flex-1 text-center">
                ${priceRange[1]}
              </div>
            </div>
          </div>
          
          {selectedBrands.length > 0 && (
            <>
              <Separator className="my-2" />
              <div>
                <h3 className="font-medium mb-3">{t("activeBrands")}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map(brand => (
                    <Badge 
                      key={brand}
                      variant="secondary"
                      className="flex items-center gap-1 pl-2 pr-1 py-1"
                    >
                      {brand}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBrand(brand)}
                        className="h-4 w-4 p-0 ml-1"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
          
          <Separator className="my-2" />
          
          <Button 
            variant="outline" 
            onClick={resetFilters}
            className="w-full"
            size="sm"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            {t("clearAllFilters")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const MobileFilters = () => (
    <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden flex items-center gap-2">
          <Filter className="h-4 w-4" />
          {t("filters")}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[90vw] sm:w-[350px]">
        <SheetHeader>
          <div className="flex justify-between items-center">
            <SheetTitle>{t("filters")}</SheetTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetFilters}
              className="h-8 w-8 p-0"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        <div className="py-4 space-y-6">
          <div>
            <h3 className="font-medium mb-3">{t("brands")}</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {brands && brands.map((brand: any) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`mobile-brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.brendName)}
                    onCheckedChange={() => toggleBrand(brand.brendName)}
                    className="rounded-sm"
                  />
                  <label htmlFor={`mobile-brand-${brand.id}`} className="text-sm cursor-pointer flex-1 truncate">
                    {brand.brendName}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="my-2" />
          
          <div>
            <h3 className="font-medium mb-3">{t("priceRange")}</h3>
            <Slider
              defaultValue={priceRange}
              min={priceRange2[0]}
              max={priceRange2[1]}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex justify-between items-center gap-4">
              <div className="bg-gray-50 rounded p-2 text-sm flex-1 text-center">
                ${priceRange[0]}
              </div>
              <span className="text-gray-400">-</span>
              <div className="bg-gray-50 rounded p-2 text-sm flex-1 text-center">
                ${priceRange[1]}
              </div>
            </div>
          </div>
          
          {selectedBrands.length > 0 && (
            <>
              <Separator className="my-2" />
              <div>
                <h3 className="font-medium mb-3">{t("activeBrands")}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map(brand => (
                    <Badge 
                      key={brand}
                      variant="secondary"
                      className="flex items-center gap-1 pl-2 pr-1 py-1"
                    >
                      {brand}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBrand(brand)}
                        className="h-4 w-4 p-0 ml-1"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
          
          <div className="flex gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => {
                resetFilters();
                setIsFilterOpen(false);
              }}
              className="flex-1"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              {t("clearAll")}
            </Button>
            
            <Button 
              onClick={() => setIsFilterOpen(false)}
              className="flex-1"
            >
              {t("applyFilters")}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className=" mt-[20px] mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("products")}</h1>
        <p className="text-gray-500">{t("browseOurCollection")}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder={t("searchProducts")}
            value={searchQuery} 
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 rounded-full bg-gray-50"
          />
        </div>
        
        <div className="flex gap-2">
          <MobileFilters />
          
          <Select
            value={sortBy}
            onValueChange={(value) => {
              setSortBy(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                <SelectValue placeholder={t("sortBy")} />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">{t("featured")}</SelectItem>
              <SelectItem value="priceLow">{t("priceLowToHigh")}</SelectItem>
              <SelectItem value="priceHigh">{t("priceHighToLow")}</SelectItem>
              <SelectItem value="nameAsc">{t("nameAToZ")}</SelectItem>
              <SelectItem value="nameDesc">{t("nameZToA")}</SelectItem>
              <SelectItem value="newest">{t("newest")}</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="hidden sm:flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {(selectedBrands.length > 0 || 
        priceRange[0] !== priceRange2[0] || 
        priceRange[1] !== priceRange2[1]) && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500">{t("activeFilters")}:</span>
          
          {selectedBrands.map(brand => (
            <Badge 
              key={brand}
              variant="secondary"
              className="flex items-center gap-1 pl-2 pr-1 py-1"
            >
              {brand}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleBrand(brand)}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          
          {(priceRange[0] !== priceRange2[0] || priceRange[1] !== priceRange2[1]) && (
            <Badge 
              variant="secondary"
              className="flex items-center gap-1 pl-2 pr-1 py-1"
            >
              ${priceRange[0]} - ${priceRange[1]}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPriceRange(priceRange2)}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="text-sm ml-2"
          >
            {t("clearAll")}
          </Button>
        </div>
      )}
      
      <div className="flex gap-6">
        <FiltersSidebar />
        
        <div className="flex-1">
          <div className="mb-4 text-sm text-gray-500 flex justify-between items-center">
            <div>
              {t("showing")} {sortedProducts.length} {t("results")}
            </div>
            <div className="hidden sm:block">
              {currentPage > 0 && totalPages > 0 && 
               `${t("page")} ${currentPage} ${t("of")} ${totalPages}`}
            </div>
          </div>
          
          {sortedProducts.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedProducts.map((product: any) => (
                  <Productscard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {paginatedProducts.map((product: any) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t("noProductsFound")}</h3>
              <p className="text-gray-500 mb-4">{t("tryAdjustingFilters")}</p>
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="mt-2"
              >
                {t("clearFilters")}
              </Button>
            </div>
          )}
          
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Productpage;