import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[800px] mt-40">
      <div className="w-full flex flex-col justify-center items-start mb-8 text-slate-700 dark:text-slate-200">
        <h1 className="mb-8 text-3xl font-bold">About the blog</h1>

        <div
          style={{
            backgroundImage: "url(images/about-banner.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full min-h-[460px] mb-8"
        ></div>

        <p className="mb-4">
          We bring you the latest insights and trends in technology, aiming to
          inspire, educate, and empower our readers with high-quality content.
        </p>

        <p className="mb-4">
          Our platform was founded out of a passion for technology and a desire
          to create a space where tech enthusiasts, professionals, and curious
          minds can explore and discuss innovations shaping our future. Our team
          of industry experts and seasoned writers makes complex tech concepts
          accessible and engaging.
        </p>

        <p className="mb-4">
          Covering topics like AI, blockchain, cybersecurity, and cloud
          computing, we strive to be a leading voice in the tech community,
          fostering a culture of innovation and learning. We believe technology
          can transform lives, and we aim to keep our readers informed and
          inspired.
        </p>

        <p className="mb-4">
          Our passionate, anonymous writers come from diverse backgrounds in
          technology, journalism, and digital marketing, delivering insightful
          content that resonates with our readers.
        </p>

        <p className="mb-4">
          We are eager to hear from you. Whether you have questions, topic
          suggestions, or thoughts to share, feel free to reach out. We highly
          value your comments and encourage you to engage in discussions on our
          posts. Together, let's explore the future of technology.
        </p>

        <p className="mb-4">
          Stay connected through our blog, social media channels, and newsletter
          for the latest updates and insights.
        </p>
      </div>
    </div>
  );
};

export default About;
