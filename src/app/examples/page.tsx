import Link from "next/link";

export default function Examples() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">Examples of LinkRoot</h1>
      <p className="text-lg text-center mb-8">
        Discover how LinkRoot can enhance your online presence. Here are some examples of how users can utilize LinkRoot to create beautiful link hubs.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/example1" className="text-blue-500 hover:underline">
            Example 1: Personal Portfolio
          </Link>
        </li>
        <li>
          <Link href="/example2" className="text-blue-500 hover:underline">
            Example 2: Freelance Services
          </Link>
        </li>
        <li>
          <Link href="/example3" className="text-blue-500 hover:underline">
            Example 3: Brand Promotion
          </Link>
        </li>
      </ul>
      <p className="text-sm text-muted-foreground mt-4">
        <strong>TODO:</strong> Integrate backend to fetch real examples and user testimonials.
      </p>
    </div>
  );
}