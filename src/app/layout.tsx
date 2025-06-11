import './globals.css';
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: 'LinkRoot',
  description: 'Your smart link-in-bio platform that grows with you.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* Navigation */}
        <header>
          <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 text-sm sm:text-base"
>
            <div className="font-semibold text-xl"><Link href="./">LinkRoot</Link></div>
            <div className="flex gap-6">
              <Link href="/login">Log in</Link>
              <Link
                href="/signup"
                className="font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-neutral-800 transition"
              >
                Sign up free
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-24 w-full max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <div className="grid sm:grid-cols-1 gap-6 mb-10">
            <div>
              <ul className="flex flex-wrap justify-center gap-4">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-6 mb-6">
            <p className="mb-2">© 2025 LinkRoot. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center gap-4">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookies">Cookie Preferences</Link></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
