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
          This blog brings you the latest insights and trends in technology,
          aiming to inspire, educate, and empower readers with high-quality
          content.
        </p>

        <p className="mb-4">
          Founded out of a passion for technology and a desire to create a space
          where tech enthusiasts, professionals, and curious minds can explore
          and discuss innovations shaping our future, this blog is run by a
          single dedicated author, ensuring a consistent voice and perspective
          in the content.
        </p>

        <p className="mb-4">
          Covering topics like AI, blockchain, cybersecurity, and cloud
          computing, this blog strives to be a leading voice in the tech
          community, fostering a culture of innovation and learning. The belief
          is that technology can transform lives, and the aim is to keep readers
          informed and inspired.
        </p>

        <p className="mb-4">
          The passionate author brings a wealth of experience in technology,
          journalism, and digital marketing, delivering insightful content that
          resonates with readers.
        </p>

        <p className="mb-4">
          This blog is eager to hear from you. Whether you have questions, topic
          suggestions, or thoughts to share, feel free to reach out. Comments
          are highly valued, and readers are encouraged to engage in discussions
          on the posts. Together, let's explore the future of technology.
        </p>

        <p className="mb-4">
          Stay connected through this blog, social media channels, and
          newsletter for the latest updates and insights.
        </p>
      </div>
    </div>
  );
};

export default About;
