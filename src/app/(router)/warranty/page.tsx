import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Shield, Clock, RotateCcw } from "lucide-react"
  
  export default function WarrantyPage() {
    return (
      <div className="container mt-[20px] mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Warranty</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        <h1 className="text-4xl font-light mb-12 tracking-tight">Warranty Information</h1>
  
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-gray-700" />
              </div>
              <CardTitle className="text-xl font-medium">Standard Warranty</CardTitle>
              <CardDescription>Included with all purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">12-month limited warranty covering manufacturing defects</p>
              <p className="text-sm text-gray-500">Technical support via email and phone</p>
            </CardContent>
          </Card>
  
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-gray-700" />
              </div>
              <CardTitle className="text-xl font-medium">Extended Warranty</CardTitle>
              <CardDescription>Additional protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Extends coverage to 24 or 36 months</p>
              <p className="text-sm text-gray-500">Includes accidental damage protection</p>
            </CardContent>
          </Card>
  
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="mb-4 p-2 bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center">
                <RotateCcw className="h-5 w-5 text-gray-700" />
              </div>
              <CardTitle className="text-xl font-medium">Business Warranty</CardTitle>
              <CardDescription>For business customers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Priority support and next business day service</p>
              <p className="text-sm text-gray-500">On-site repair options available</p>
            </CardContent>
          </Card>
        </div>
  
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Warranty Coverage</h2>
          <p className="text-gray-600 mb-6">
            Our warranty covers defects in materials and workmanship under normal use during the warranty period. The
            warranty period begins on the date of purchase shown on your receipt.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-3">What's Covered:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Hardware defects in materials and workmanship</li>
                <li>Battery defects (for up to 12 months)</li>
                <li>Display and screen issues not caused by external damage</li>
                <li>Keyboard and touchpad functionality</li>
                <li>Power supply and charging issues</li>
                <li>Pre-installed software issues</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-medium mb-3">What's Not Covered:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Accidental damage (unless covered by extended warranty)</li>
                <li>Normal wear and tear</li>
                <li>Cosmetic damage that doesn't affect functionality</li>
                <li>Damage from misuse or abuse</li>
                <li>Software issues not related to hardware defects</li>
                <li>Products with altered or removed serial numbers</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How do I make a warranty claim?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  To make a warranty claim, contact our customer support team via email or phone with your order number
                  and a description of the issue. Our team will guide you through the process and provide a return
                  authorization if necessary.
                </p>
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What is the turnaround time for repairs?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Standard repairs typically take 7-10 business days from the time we receive your device. This includes
                  diagnosis, repair, quality testing, and return shipping. Business warranty customers receive priority
                  service with 3-5 business day turnaround.
                </p>
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can I upgrade my warranty after purchase?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Yes, you can upgrade to an extended warranty within 30 days of your original purchase. Contact our
                  customer support team to arrange the upgrade. After 30 days, warranty upgrades are evaluated on a
                  case-by-case basis.
                </p>
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Do you offer international warranty coverage?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Our standard warranty is valid worldwide, but service options may vary by country. International
                  customers may need to ship devices back to the country of purchase for service, or additional shipping
                  fees may apply. Business warranty customers have access to our international service network.
                </p>
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">What happens if my device can't be repaired?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  If we determine that your device cannot be repaired, we will replace it with an identical or comparable
                  model. If the exact model is no longer available, we'll provide a replacement with equal or better
                  specifications at no additional cost to you.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
  
        <div>
          <h2 className="text-2xl font-medium mb-6">Warranty Documents</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-12 bg-gray-100 mr-3 flex items-center justify-center text-gray-400">PDF</div>
                <div>
                  <h3 className="font-medium">Standard Warranty Terms</h3>
                  <p className="text-sm text-gray-500">PDF, 245KB</p>
                </div>
              </div>
            </a>
  
            <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-12 bg-gray-100 mr-3 flex items-center justify-center text-gray-400">PDF</div>
                <div>
                  <h3 className="font-medium">Extended Warranty Terms</h3>
                  <p className="text-sm text-gray-500">PDF, 320KB</p>
                </div>
              </div>
            </a>
  
            <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-12 bg-gray-100 mr-3 flex items-center justify-center text-gray-400">PDF</div>
                <div>
                  <h3 className="font-medium">Business Warranty Guide</h3>
                  <p className="text-sm text-gray-500">PDF, 410KB</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
  