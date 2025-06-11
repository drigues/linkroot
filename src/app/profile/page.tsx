import React from 'react';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <form className="flex flex-col gap-4 mt-6 max-w-md w-full">
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium">
            Avatar URL
          </label>
          <input
            type="text"
            id="avatar"
            placeholder="Enter your avatar URL"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            placeholder="Tell us about yourself"
            className="mt-1 p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="social" className="block text-sm font-medium">
            Social Media Handles
          </label>
          <input
            type="text"
            id="social"
            placeholder="Enter your social media handles"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}