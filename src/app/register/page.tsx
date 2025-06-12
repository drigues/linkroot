// app/register/page.tsx or pages/register.tsx
"use client"; // for app directory
import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [directory, setDirectory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dirAvailable, setDirAvailable] = useState<null | boolean>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (directory) {
      const delayDebounce = setTimeout(() => {
        fetch(`/api/check-directory?directory=${directory}`)
          .then(res => res.json())
          .then(data => setDirAvailable(data.available));
      }, 500);

      return () => clearTimeout(delayDebounce);
    }
  }, [directory]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ directory, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Successfully registered! 🎉");
    } else {
      setMessage(data.detail || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto space-y-4">
      <div>
        <label>Directory</label>
        <input
          value={directory}
          onChange={(e) => setDirectory(e.target.value)}
          className="border p-2 w-full"
        />
        {dirAvailable !== null && (
          <p className={dirAvailable ? "text-green-500" : "text-red-500"}>
            {dirAvailable ? "Available!" : "Already taken"}
          </p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Register
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}