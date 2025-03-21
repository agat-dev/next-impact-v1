import Link from "next/link"
import { ArrowLeft, BookOpen, Copy, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function UXPrinciplesPage() {
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
              <Link href="/documentation/ux-ui" className="text-sm text-muted-foreground hover:text-foreground">
                UX/UI
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm">Principles</span>
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">UX Design Principles</h1>
                <p className="text-xl text-muted-foreground">
                  Learn the core principles of user experience design to create intuitive websites.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                    <span className="text-sm font-medium">By MarketingDocs Team</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Updated March 20, 2025</span>
                </div>
              </div>
              <Separator />
              <div className="prose prose-lg max-w-none">
                <h2>Introduction to UX Design</h2>
                <p>
                  User Experience (UX) design is the process of creating products that provide meaningful and relevant
                  experiences to users. This involves the design of the entire process of acquiring and integrating the
                  product, including aspects of branding, design, usability, and function.
                </p>
                <p>
                  A good user experience is one that meets a particular user's needs in the specific context where they
                  use the product. For websites and applications, this means creating interfaces that are easy to use,
                  accessible, and efficient.
                </p>

                <h2>Core UX Design Principles</h2>
                <h3>1. User-Centered Design</h3>
                <p>
                  User-centered design (UCD) is a design philosophy that puts users at the center of the design process.
                  It involves:
                </p>
                <ul>
                  <li>
                    <strong>Understanding user needs</strong>: Conducting research to understand who your users are and
                    what they need.
                  </li>
                  <li>
                    <strong>Designing for users</strong>: Creating solutions that address user needs and preferences.
                  </li>
                  <li>
                    <strong>Testing with users</strong>: Validating designs through user testing and feedback.
                  </li>
                </ul>

                <h3>2. Hierarchy</h3>
                <p>
                  Visual hierarchy refers to the arrangement of elements in a way that indicates importance. It
                  influences the order in which the human eye perceives what it sees:
                </p>
                <ul>
                  <li>
                    <strong>Size and weight</strong>: Larger elements draw more attention than smaller ones.
                  </li>
                  <li>
                    <strong>Color and contrast</strong>: High-contrast elements stand out more.
                  </li>
                  <li>
                    <strong>Spacing</strong>: Proper spacing helps users understand which elements are related.
                  </li>
                </ul>

                <h3>3. Consistency</h3>
                <p>Consistency in design creates familiarity and reduces the learning curve:</p>
                <ul>
                  <li>
                    <strong>Visual consistency</strong>: Using the same colors, fonts, and styles throughout.
                  </li>
                  <li>
                    <strong>Functional consistency</strong>: Similar elements should work in similar ways.
                  </li>
                  <li>
                    <strong>External consistency</strong>: Following established conventions that users are familiar
                    with.
                  </li>
                </ul>

                <h3>4. Accessibility</h3>
                <p>
                  Designing for accessibility ensures that products can be used by people with a wide range of
                  abilities:
                </p>
                <ul>
                  <li>
                    <strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.
                  </li>
                  <li>
                    <strong>Operable</strong>: Interface components must be operable by a variety of users.
                  </li>
                  <li>
                    <strong>Understandable</strong>: Information and operation must be understandable.
                  </li>
                  <li>
                    <strong>Robust</strong>: Content must be robust enough to be interpreted by a wide variety of user
                    agents.
                  </li>
                </ul>

                <h3>5. Feedback</h3>
                <p>Feedback keeps users informed about what's happening:</p>
                <ul>
                  <li>
                    <strong>Immediate feedback</strong>: Responding to user actions promptly.
                  </li>
                  <li>
                    <strong>Clear feedback</strong>: Making it obvious what happened or is happening.
                  </li>
                  <li>
                    <strong>Appropriate feedback</strong>: Using the right type of feedback for the situation.
                  </li>
                </ul>

                <h2>The UX Design Process</h2>
                <h3>1. Research</h3>
                <p>Understanding users and their needs through:</p>
                <ul>
                  <li>User interviews</li>
                  <li>Surveys</li>
                  <li>Competitive analysis</li>
                  <li>Analytics review</li>
                </ul>

                <h3>2. Define</h3>
                <p>Defining the problem and user needs:</p>
                <ul>
                  <li>Creating user personas</li>
                  <li>Defining user journeys</li>
                  <li>Setting project goals</li>
                </ul>

                <h3>3. Ideate</h3>
                <p>Generating ideas and solutions:</p>
                <ul>
                  <li>Sketching</li>
                  <li>Brainstorming</li>
                  <li>Mind mapping</li>
                </ul>

                <h3>4. Prototype</h3>
                <p>Creating interactive representations of the design:</p>
                <ul>
                  <li>Low-fidelity wireframes</li>
                  <li>High-fidelity mockups</li>
                  <li>Interactive prototypes</li>
                </ul>

                <h3>5. Test</h3>
                <p>Evaluating the design with users:</p>
                <ul>
                  <li>Usability testing</li>
                  <li>A/B testing</li>
                  <li>Heuristic evaluation</li>
                </ul>

                <h3>6. Implement</h3>
                <p>Working with developers to bring the design to life.</p>

                <h2>Conclusion</h2>
                <p>
                  Good UX design is about creating products that are not only visually appealing but also easy to use
                  and valuable to users. By following these principles and process, you can create websites and
                  applications that provide a positive user experience and help achieve business goals.
                </p>
                <p>
                  Remember that UX design is an iterative process. Continuously gathering feedback and making
                  improvements is key to creating exceptional user experiences.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Related Articles</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link
                    href="/documentation/ux-ui/responsive-design"
                    className="group rounded-lg border p-4 hover:bg-muted/50"
                  >
                    <h4 className="font-medium group-hover:underline">Responsive Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Master the techniques for creating websites that work well on all devices.
                    </p>
                  </Link>
                  <Link
                    href="/documentation/ux-ui/accessibility"
                    className="group rounded-lg border p-4 hover:bg-muted/50"
                  >
                    <h4 className="font-medium group-hover:underline">Web Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn how to make your website accessible to all users, including those with disabilities.
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

