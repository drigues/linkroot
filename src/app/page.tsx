// import Image from "next/image";
import Test from "../components/Test";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      
      {/* Hero */}
      <main className="text-center max-w-3xl flex flex-col gap-6">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Everything you are. Rooted in one smart link.
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Join thousands of creators, entrepreneurs, and professionals using
          LinkRoot to unify their online presence. One beautiful link to
          organize and showcase everything you make, share, or sell — from
          Instagram to WhatsApp, from digital stores to your latest content.
        </p>
        <p className="text-blue-500 font-mono text-sm">
          linkroot.xyz/thgo
        </p>
         <a href="/signup" className="font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-neutral-800 transition">
                Sign up free
         </a>
      </main>

      {/* Core Features */}
      <section className="mt-20 flex flex-col gap-12 text-center max-w-2xl">
        <div>
          <h2 className="text-2xl font-semibold">Build your LinkRoot in minutes</h2>
          <p className="text-muted-foreground mt-2">
            Customize your bio page to match your brand. Add your links, embeds,
            videos, products, newsletter forms — even accept payments. It’s your
            space. Your roots.
          </p>
          <a href="/signup" className="text-blue-600 mt-2 inline-block">
            → Start for free
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">One link, infinite potential</h2>
          <p className="text-muted-foreground mt-2">
            Place your LinkRoot in your Instagram, TikTok, LinkedIn bio, email
            signature — anywhere you show up. Plus, print your dynamic QR code to
            link the offline world to your digital presence.
          </p>
          <a href="/signup" className="text-blue-600 mt-2 inline-block">
            → Create your LinkRoot
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Understand what works. Grow smarter.</h2>
          <p className="text-muted-foreground mt-2">
            Track clicks, revenue, and engagement. See what resonates. Then tweak
            and optimize — all in real time, with our simple analytics dashboard.
          </p>
          <a href="/insights" className="text-blue-600 mt-2 inline-block">
            → Explore insights
          </a>
        </div>
      </section>

      {/* Community */}
      <section className="mt-24 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Built for creators. Trusted by doers.
        </h2>
        <p className="text-muted-foreground mb-10">
          For every creator, brand and side hustle — musicians, podcasters,
          writers, influencers, coaches, streamers, artists, activists,
          entrepreneurs, educators, and more.
        </p>

        <div className="space-y-6 text-left">
          <blockquote className="border-l-4 pl-4 text-sm text-muted-foreground">
            “LinkRoot lets me express every side of my work, and makes it look
            stunning.”  
            <br />— <strong>Sasha R.</strong>, Visual Artist
          </blockquote>
          <blockquote className="border-l-4 pl-4 text-sm text-muted-foreground">
            “I use LinkRoot to sell presets, collect signups, and share my latest
            drops — all in one place.”  
            <br />— <strong>Leo M.</strong>, Photographer & Content Creator
          </blockquote>
          <blockquote className="border-l-4 pl-4 text-sm text-muted-foreground">
            “Simple, clean, and powerful. I replaced my old bio tool in minutes.”  
            <br />— <strong>Ana L.</strong>, Educator & Podcast Host
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20 text-center max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Got questions?</h2>
        <ul className="text-blue-600 space-y-2">
          <li><a href="/faq#why">→ Why use LinkRoot?</a></li>
          <li><a href="/faq#sell">→ Can I sell directly from my bio page?</a></li>
          <li><a href="/faq#payments">→ How do payments work?</a></li>
          <li><a href="/faq#socials">→ Can I use it on all my socials?</a></li>
          <li><a href="/faq#secure">→ Is LinkRoot safe and secure?</a></li>
        </ul>
        <a href="/help" className="block mt-4 text-sm text-muted-foreground underline underline-offset-4">
          Explore our Help Center
        </a>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>
                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Start your digital root system today.
        </h2>
        <a
          href="/signup"
          className="inline-block bg-black text-white rounded-full px-6 py-3 hover:bg-neutral-800 transition"
        >
          → Get started for free
        </a>
      </section>

      {/* Test */}
      <Test />
    </div>
  );
}
