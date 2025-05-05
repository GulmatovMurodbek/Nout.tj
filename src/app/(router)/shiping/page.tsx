import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Truck, CreditCard, Clock, ArrowRight } from "lucide-react"
  
  export default function ShippingPaymentPage() {
    return (
      <div className=" mt-[20px] mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shipping & Payment</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        <h1 className="text-4xl font-light mb-12 tracking-tight">Shipping & Payment</h1>
  
        <Tabs defaultValue="shipping" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
  
          <TabsContent value="shipping">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Standard Delivery</CardTitle>
                  <CardDescription>3-5 business days</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">Free shipping on all orders over $999</p>
                  <p className="text-sm text-gray-500">$15 flat rate for orders under $999</p>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Express Delivery</CardTitle>
                  <CardDescription>1-2 business days</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">Available for all orders placed before 2PM</p>
                  <p className="text-sm text-gray-500">$35 flat rate for all orders</p>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-sm md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Store Pickup</CardTitle>
                  <CardDescription>Same day</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">Available at select locations</p>
                  <p className="text-sm text-gray-500">Free of charge</p>
                </CardContent>
              </Card>
            </div>
  
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4">Shipping Policy</h3>
              <p className="text-gray-600 mb-4">
                We ship to all 50 states and select international destinations. All orders are processed within 24 hours
                during business days.
              </p>
              <p className="text-gray-600 mb-4">
                Tracking information will be provided via email once your order has been shipped. Please allow up to 24
                hours for tracking information to update in the carrier's system.
              </p>
              <p className="text-gray-600">
                For international orders, please note that customs fees and import duties are not included in the shipping
                cost and are the responsibility of the customer.
              </p>
            </div>
          </TabsContent>
  
          <TabsContent value="payment">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-5 bg-gray-100 mr-3"></div>
                      <span className="text-gray-600">Credit/Debit Cards (Visa, Mastercard, Amex)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-5 bg-gray-100 mr-3"></div>
                      <span className="text-gray-600">PayPal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-5 bg-gray-100 mr-3"></div>
                      <span className="text-gray-600">Apple Pay</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-5 bg-gray-100 mr-3"></div>
                      <span className="text-gray-600">Google Pay</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-5 bg-gray-100 mr-3"></div>
                      <span className="text-gray-600">Bank Transfer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">Financing Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We offer flexible financing options to make your purchase more manageable:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">0% APR for 12 months:</span>
                      <span>Available on purchases over $500 with approved credit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Monthly installments:</span>
                      <span>Split your payment into 3, 6, or 12 equal monthly payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Business leasing:</span>
                      <span>Flexible leasing options for business customers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
  
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4">Payment Security</h3>
              <p className="text-gray-600 mb-4">
                All payment information is encrypted using industry-standard SSL technology. We do not store your full
                credit card details on our servers.
              </p>
              <p className="text-gray-600">
                Our payment processing partners are PCI DSS compliant, ensuring the highest level of security for your
                financial information.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }  