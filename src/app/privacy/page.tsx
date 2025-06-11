import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">About LinkRoot</h1>
      <p className="text-lg text-center max-w-2xl">
        LinkRoot is your smart link-in-bio platform designed to help creators, freelancers, and brands manage their digital presence effortlessly. 
        Our mission is to provide you with beautiful, intelligent link hubs that grow with you.
      </p>
      <p className="text-lg text-center max-w-2xl mt-4">
        With LinkRoot, you can easily share your content, connect with your audience, and enhance your online visibility. 
        Join us in transforming the way you present your digital identity.
      </p>
      {/* TODO: Add more information about the platform, team, and vision */}
    </div>
  );
};

export default About;