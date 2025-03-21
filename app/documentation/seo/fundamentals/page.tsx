import Link from "next/link"
import { ArrowLeft, BookOpen, Copy, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function SEOFundamentalsPage() {
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
        <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/documentation" className="text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/documentation/seo" className="text-sm text-muted-foreground hover:text-foreground">
                SEO
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm">Fundamentals</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link href="/documentation">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Documentation
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">SEO Fundamentals</h1>
                <p className="text-xl text-muted-foreground">
                  Learn the basics of search engine optimization and how to improve your website's visibility.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                    <span className="text-sm font-medium">By MarketingDocs Team</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Updated March 15, 2025</span>
                </div>
              </div>
              <Separator />
              <div className="prose prose-lg max-w-none">
                <h2>Introduction to SEO</h2>
                <p>
                  Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to
                  your website through organic search engine results. The goal of SEO is to improve your website's
                  visibility when people search for products or services related to your business.
                </p>
                <p>
                  The major search engines like Google, Bing, and Yahoo rank websites based on what they consider most
                  relevant to users. SEO involves understanding what people are searching for online, the words they're
                  using, and the type of content they wish to consume.
                </p>

                <h2>Why SEO Matters</h2>
                <p>SEO is crucial for several reasons:</p>
                <ul>
                  <li>
                    <strong>Visibility and Rankings</strong>: One of the main goals of SEO is to increase visibility,
                    which means making it easier for prospects to find you when they search for something you have to
                    offer.
                  </li>
                  <li>
                    <strong>Web Traffic</strong>: Increased visibility and rankings help drive more traffic to your
                    website, and ideally, increase the likelihood of converting prospects into customers.
                  </li>
                  <li>
                    <strong>Authority</strong>: Having a well-optimized website and quality content helps establish your
                    site as an authority in your field.
                  </li>
                  <li>
                    <strong>Better User Experience</strong>: SEO is not just about search engines but good SEO practices
                    also improve the user experience of a website.
                  </li>
                </ul>

                <h2>Key SEO Components</h2>
                <h3>On-Page SEO</h3>
                <p>
                  On-page SEO refers to the practice of optimizing individual web pages to rank higher in search
                  engines. This includes:
                </p>
                <ul>
                  <li>
                    <strong>Content Quality</strong>: Creating high-quality, valuable content that answers users'
                    questions.
                  </li>
                  <li>
                    <strong>HTML Tags</strong>: Optimizing title tags, meta descriptions, header tags, and image alt
                    text.
                  </li>
                  <li>
                    <strong>URL Structure</strong>: Creating clean, descriptive URLs that include keywords.
                  </li>
                  <li>
                    <strong>Internal Linking</strong>: Linking to other relevant pages within your website.
                  </li>
                </ul>

                <h3>Off-Page SEO</h3>
                <p>
                  Off-page SEO involves activities conducted outside of your website to improve its search engine
                  rankings:
                </p>
                <ul>
                  <li>
                    <strong>Backlinks</strong>: Getting other reputable websites to link to your site.
                  </li>
                  <li>
                    <strong>Social Media Marketing</strong>: Promoting your content on social platforms.
                  </li>
                  <li>
                    <strong>Guest Blogging</strong>: Writing content for other websites to build authority and generate
                    backlinks.
                  </li>
                </ul>

                <h3>Technical SEO</h3>
                <p>
                  Technical SEO focuses on improving the technical aspects of your website to help search engines crawl
                  and index it more effectively:
                </p>
                <ul>
                  <li>
                    <strong>Site Speed</strong>: Ensuring your website loads quickly on all devices.
                  </li>
                  <li>
                    <strong>Mobile-Friendliness</strong>: Making sure your site works well on mobile devices.
                  </li>
                  <li>
                    <strong>Structured Data</strong>: Implementing schema markup to help search engines understand your
                    content.
                  </li>
                  <li>
                    <strong>XML Sitemaps</strong>: Creating and submitting sitemaps to help search engines discover and
                    index your content.
                  </li>
                </ul>

                <h2>Getting Started with SEO</h2>
                <p>If you're new to SEO, here are some steps to get started:</p>
                <ol>
                  <li>
                    <strong>Conduct Keyword Research</strong>: Identify the terms and phrases your target audience is
                    searching for.
                  </li>
                  <li>
                    <strong>Analyze Your Competition</strong>: Study what your competitors are doing well and where they
                    might be falling short.
                  </li>
                  <li>
                    <strong>Optimize Your Website Structure</strong>: Ensure your site is organized logically and is
                    easy for users and search engines to navigate.
                  </li>
                  <li>
                    <strong>Create Quality Content</strong>: Develop content that addresses the needs and questions of
                    your target audience.
                  </li>
                  <li>
                    <strong>Monitor and Adjust</strong>: Use analytics tools to track your performance and make
                    adjustments as needed.
                  </li>
                </ol>

                <h2>Conclusion</h2>
                <p>
                  SEO is an ongoing process that requires consistent effort and adaptation to changing search engine
                  algorithms and user behaviors. By understanding and implementing the fundamentals of SEO, you can
                  improve your website's visibility, attract more qualified traffic, and ultimately achieve your
                  business goals.
                </p>
                <p>
                  Remember that SEO is not about tricking search engines but about creating a better experience for your
                  users while helping search engines understand and value your content.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Related Articles</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link
                    href="/documentation/seo/keyword-research"
                    className="group rounded-lg border p-4 hover:bg-muted/50"
                  >
                    <h4 className="font-medium group-hover:underline">Keyword Research</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover how to find and use the right keywords to attract your target audience.
                    </p>
                  </Link>
                  <Link href="/documentation/seo/on-page" className="group rounded-lg border p-4 hover:bg-muted/50">
                    <h4 className="font-medium group-hover:underline">On-Page SEO</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn how to optimize individual web pages to rank higher in search results.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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

