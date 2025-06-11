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
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/examples">Examples</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} LinkRoot. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
