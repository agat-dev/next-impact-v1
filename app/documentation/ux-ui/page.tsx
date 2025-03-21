import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SearchDocumentation } from "@/components/search-documentation"

export default function UXUIDocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>MarketingDocs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
              Documentation
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/brief" className="text-sm font-medium hover:underline underline-offset-4">
              Create Brief
            </Link>
            <Link href="/freelancers" className="text-sm font-medium hover:underline underline-offset-4">
              Find Freelancers
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UX/UI Design</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn how to create user-friendly and engaging website experiences.
                </p>
              </div>
              <div className="w-full max-w-md">
                <SearchDocumentation />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/documentation">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Documentation
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">UX Design Principles</h3>
                  <p className="text-muted-foreground">
                    Learn the core principles of user experience design to create intuitive websites.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/principles"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="UX Design Principles"
                >
                  <span className="sr-only">UX Design Principles</span>
                </Link>
              </div>
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Responsive Design</h3>
                  <p className="text-muted-foreground">
                    Master the techniques for creating websites that work well on all devices.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/responsive-design"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Responsive Design"
                >
                  <span className="sr-only">Responsive Design</span>
                </Link>
              </div>
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Web Accessibility</h3>
                  <p className="text-muted-foreground">
                    Learn how to make your website accessible to all users, including those with disabilities.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/accessibility"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Web Accessibility"
                >
                  <span className="sr-only">Web Accessibility</span>
                </Link>
              </div>
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">UI Design Fundamentals</h3>
                  <p className="text-muted-foreground">
                    Understand the key elements of effective user interface design.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/ui-fundamentals"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="UI Design Fundamentals"
                >
                  <span className="sr-only">UI Design Fundamentals</span>
                </Link>
              </div>
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Information Architecture</h3>
                  <p className="text-muted-foreground">
                    Learn how to organize and structure content for optimal user experience.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/information-architecture"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Information Architecture"
                >
                  <span className="sr-only">Information Architecture</span>
                </Link>
              </div>
              <div className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Usability Testing</h3>
                  <p className="text-muted-foreground">
                    Discover methods for testing and improving the usability of your website.
                  </p>
                </div>
                <Link
                  href="/documentation/ux-ui/usability-testing"
                  className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Usability Testing"
                >
                  <span className="sr-only">Usability Testing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UX/UI Learning Path</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Follow our structured learning path to master user experience and interface design from beginner to
                  advanced level.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm w-full max-w-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">UX Designer</h3>
                  <p className="text-muted-foreground">
                    Learn to create user-friendly and engaging website experiences.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-0 rounded-full bg-primary"></div>
                  </div>
                </div>
                <Link href="/learning-paths/ux">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 MarketingDocs. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

