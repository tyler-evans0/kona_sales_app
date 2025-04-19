import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white pt-16">
        <div className="lotus-container relative z-10">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Our mission is to help college students make bank!
            </h1>

            {/* Video Placeholder */}
            <div className="video-placeholder mx-auto max-w-2xl">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/70">Upload your video here</p>
              </div>
            </div>

            <p className="text-lg md:text-xl opacity-90 mt-6 max-w-2xl mx-auto">
              Kona helps college students achieve financial freedom and learn the art of sales in a short period of time
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-black text-white py-16 md:py-24 border-t border-white/10">
        <div className="lotus-container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="https://ext.same-assets.com/2095582637/259007866.png"
                alt="Mentor Portrait"
                width={150}
                height={150}
                className="rounded-full border-4 border-accent/30"
              />
            </div>
            <div className="md:w-2/3">
              <div className="mb-8">
                <svg className="w-12 h-12 text-accent opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl font-light mb-4">
                "Our mission is to teach kids the skills college will never teach you. How to sell and create money out of thin air, how to work long hours, how to face rejection, and how to never have to work for someone else again in your life"
              </blockquote>
              <cite className="block text-accent">- Josh B</cite>
              <p className="text-sm mt-2 text-gray-400">We've got a goal. The proper goal to go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 relative border-t border-white/10">
        <div className="lotus-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Learn Financial Literacy</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Learn how to invest your money at a young age, as well as how to get into real estate so you can start building long term wealth
          </p>
          <Link href="/" className="lotus-button bg-accent text-white hover:bg-accent/90">
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-black py-16 md:py-24 border-t border-white/10">
        <div className="lotus-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Hear From Our Past Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lotus-blue-gray/20 flex items-center justify-center text-lotus-blue-gray">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Sarah T.</h4>
                  <p className="text-sm text-gray-400">Former Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The mentorship program completely changed my career trajectory. I gained both technical skills and the confidence to excel."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lotus-blue-gray/20 flex items-center justify-center text-lotus-blue-gray">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Mark J.</h4>
                  <p className="text-sm text-gray-400">Former Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've tried other programs, but this provided the real-world experience I needed to succeed in sales and business development."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lotus-blue-gray/20 flex items-center justify-center text-lotus-blue-gray">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Alex P.</h4>
                  <p className="text-sm text-gray-400">Former Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Beyond just sales techniques, I learned how to communicate effectively and build lasting relationships with clients."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black py-16 md:py-24 border-t border-white/10">
        <div className="lotus-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Learn the 4 steps of sales</h2>
              <p className="text-gray-300 mb-6">
                Our proven method works because it focuses on the fundamentals while incorporating cutting-edge techniques. But more importantly, we provide support every step of the way, ensuring nothing is left to chance.
              </p>
              <Link href="/" className="lotus-button">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">How to get someone you just met to like you</h3>
                    <p className="text-gray-400">Building rapport and creating positive first impressions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">How to get someone you just met to listen to you</h3>
                    <p className="text-gray-400">Commanding attention and communicating value effectively.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">How to get someone to believe in you that you just met</h3>
                    <p className="text-gray-400">Building trust and credibility in your first interaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">How to get someone you just met to buy from you</h3>
                    <p className="text-gray-400">Closing deals with confidence and consistency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="bg-card py-16 md:py-24 border-t border-white/10">
        <div className="lotus-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Take a Look Into Your Future
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Average Earnings Based on Experience Level
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* First Year Rep */}
            <div className="border border-white/10 rounded-lg p-8 hover:bg-black/30 transition-colors">
              <h3 className="font-semibold text-xl mb-2">Average First Year Rep</h3>
              <p className="text-3xl font-bold mb-6">$32,000</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to Experienced Peer Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly 1:1 Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3-Month Career Path Plan</span>
                </div>
              </div>
            </div>

            {/* Veteran */}
            <div className="border border-white/10 rounded-lg p-8 bg-accent/5 hover:bg-accent/10 transition-colors">
              <h3 className="font-semibold text-xl mb-2">Average Veteran Rep</h3>
              <p className="text-3xl font-bold mb-6">$101,000</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Join Regional All-Star Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Become an Active Mentor</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Profit Sharing Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Andy Frisella Quote Section */}
      <section className="bg-black py-16 md:py-24 border-t border-white/10">
        <div className="lotus-container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <svg className="w-12 h-12 text-accent opacity-60 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light mb-6">
              "Personal excellence is the ultimate act of rebellion."
            </blockquote>
            <cite className="block text-accent text-xl">- Andy Frisella</cite>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
