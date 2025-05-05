import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white mt-[40px]">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://pngimg.com/d/laptop_PNG101771.png"
            alt="Minimalist laptop workspace"
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            We Curate the <span className="font-medium">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing you the finest selection of premium laptops since 2010
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className=" px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, TechNova began as a small boutique store with a simple mission: to provide customers
                with carefully selected, high-performance laptops that truly meet their needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we've grown into a trusted marketplace for professionals, creatives, gamers, and
                everyday users who value quality, performance, and thoughtful design in their technology.
              </p>
              <Button variant="outline" className="group">
                Learn more about our journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="https://png.pngtree.com/png-vector/20240423/ourmid/pngtree-3d-beautiful-laptop-on-transparent-background-png-image_12303356.png" width={800} height={600} alt="Our store"  className=" object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className=" px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Our Philosophy</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
            We believe technology should enhance your life, not complicate it. Every laptop in our collection is
            selected based on performance, build quality, and user experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg">
              <div className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-light">01</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Curated Selection</h3>
              <p className="text-muted-foreground">
                We personally test and select every model we offer, ensuring only the best makes it to our shelves.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <div className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-light">02</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our team provides personalized recommendations based on your specific needs and use cases.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <div className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-light">03</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Lifetime Support</h3>
              <p className="text-muted-foreground">
                We stand behind every laptop we sell with dedicated post-purchase support and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className=" px-4">
          <h2 className="text-3xl font-light mb-6">Featured Collections</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Explore our carefully curated laptop collections, designed to meet the needs of different users.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Creator Series",
                description: "High-performance laptops with color-accurate displays for designers and content creators",
                image: "https://storage-asset.msi.com/event/2022/nb/nb-creator-special-landing-page/images/creator-series-pd.png",
              },
              {
                title: "Professional Series",
                description: "Reliable, secure, and powerful laptops for business professionals and remote workers",
                image: "https://sm.mashable.com/t/mashable_me/cover/m/microsoft-/microsoft-surface-laptop-studio-2_agpf.1024.png",
              },
              {
                title: "Gaming Elite",
                description: "Ultimate gaming machines with cutting-edge graphics and cooling technology",
                image: "https://www.pcspecialist.ie/images/products/24241/1.png?1744376325",
              },
            ].map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
                <p className="text-muted-foreground mb-3">{collection.description}</p>
                <Link href="#" className="text-sm font-medium inline-flex items-center">
                  Explore collection
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className=" px-4">
          <h2 className="text-3xl font-light mb-6">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            The passionate experts behind our curated laptop marketplace.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                image: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Curation",
                image: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
              },
              {
                name: "Michael Park",
                role: "Technical Specialist",
                image: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
              },
              {
                name: "Emma Rodriguez",
                role: "Customer Experience",
                image: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
                  <img src={member.image || "/placeholder.svg"} alt={member.name}  className="object-cover" />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className=" px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-6">Visit Our Showroom</h2>
              <p className="text-muted-foreground mb-8">
                Experience our curated laptop collection in person. Our experts are ready to help you find the perfect
                match for your needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">123 Tech Avenue, Innovation District, CA 94103</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@technova.example</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button>Book a Consultation</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="https://d34vm3j4h7f97z.cloudfront.net/original/4X/1/6/b/16b9f4a996abd2ace3b48e5d5cb0bff7d002a3e9.jpeg" alt="Our showroom" width={1200} height={800}  className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
