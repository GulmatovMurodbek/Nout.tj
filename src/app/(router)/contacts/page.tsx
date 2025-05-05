import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"
  import { MapPin, Phone, Mail, Clock } from "lucide-react"
  
  export default function ContactsPage() {
    return (
      <div className=" mt-[20px] mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contacts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        <h1 className="text-4xl font-light mb-12 tracking-tight">Contact Us</h1>
  
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? Our team is here to help. Fill out the form and we'll get
              back to you as soon as possible.
            </p>
  
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
              </div>
  
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
  
          <div>
            <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-gray-600">
                    123 Tech Plaza
                    <br />
                    Suite 400
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </address>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>Monday - Friday: 9AM - 6PM</li>
                    <li>Saturday: 10AM - 4PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
  
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>Sales: (800) 123-4567</li>
                    <li>Support: (800) 765-4321</li>
                    <li>International: +1 415-555-0123</li>
                  </ul>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-medium">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>Sales: sales@laptopmarket.com</li>
                    <li>Support: support@laptopmarket.com</li>
                    <li>General: info@laptopmarket.com</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
  
            <div className="bg-gray-100 rounded-lg h-[300px] flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>
        </div>
  
        <div>
          <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">What are your shipping times?</h3>
              <p className="text-gray-600 mb-4">
                Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery.
                Please visit our Shipping & Payment page for more details.
              </p>
  
              <h3 className="text-lg font-medium mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600">
                Yes, we ship to select international destinations. International shipping times vary by location.
                Additional customs fees may apply.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
              <p className="text-gray-600 mb-4">
                We offer a 30-day return policy for most products. Items must be in original condition with all packaging
                and accessories. Please contact our support team to initiate a return.
              </p>
  
              <h3 className="text-lg font-medium mb-2">Do you have physical stores?</h3>
              <p className="text-gray-600">
                Yes, we have flagship stores in San Francisco, New York, and Chicago. Visit our Locations page for store
                addresses and hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  