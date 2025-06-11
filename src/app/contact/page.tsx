import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        We would love to hear from you! Please reach out with any questions or feedback.
      </p>
      <form className="mt-6 flex flex-col gap-4 max-w-md w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded p-2"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded p-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="rounded-full bg-foreground text-background hover:bg-[#383838] transition-colors font-medium h-10"
        >
          Send Message
        </button>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        TODO: Integrate with backend for message handling.
      </p>
    </div>
  );
}