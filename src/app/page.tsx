import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center max-w-2xl">
        <Image
          src="/vercel.svg"
          alt="LinkRoot logo"
          width={140}
          height={40}
          priority
        />

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          ~ LinkRoot ~
        </h1>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Your smart link-in-bio that grows with you.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground font-[family-name:var(--font-geist-mono)]">
          LinkRoot helps creators, freelancers and brands manage their digital presence through beautiful, intelligent link hubs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="/signup"
            className="rounded-full transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:px-6 flex items-center justify-center"
          >
            Get Started
          </a>
          <a
            href="/examples"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:px-6 flex items-center justify-center"
          >
            See Examples
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        <a
          href="/about"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          About
        </a>
        <a
          href="https://linkroot.xyz/pricing"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          Pricing
        </a>
        <a
          href="https://linkroot.xyz/docs"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          Docs
        </a>
        <a
          href="/contact"
          className="hover:underline hover:underline-offset-4"
        >
          Contact
        </a>
      </footer>
    </div>
  );
}