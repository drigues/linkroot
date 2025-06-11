import './globals.css';

export const metadata = {
  title: 'LinkRoot',
  description: 'Your smart link-in-bio platform that grows with you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/examples">Examples</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/contact">Contact</a></li>
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