// import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-800 mb-8 leading-relaxed">
          Welcome to our blog! We provide a platform where readers can explore a wide variety of interesting
          and informative articles. Whether you are looking for the latest trends, thought-provoking discussions, or
          detailed insights into various topics, we have something for everyone.
        </p>
        
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Our mission is to make reading more accessible and enjoyable by summarizing long blog posts into concise,
            easily digestible pieces. We aim to provide a quick overview of the key points, so you can stay updated
            without spending hours reading.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Every blog article on our website starts as a long and detailed piece, but we summarize it for your convenience.
            Our team carefully distills the essence of each post, highlighting the most important points in a short, readable format.
            This way, you can quickly browse through the main ideas and decide if you would like to read more.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-xl text-gray-700 space-y-4 leading-relaxed">
            <li>Concise Summaries: Get the gist of long blogs without spending too much time.</li>
            <li>Curated Content: We handpick the best topics, from lifestyle to technology, to keep you informed and entertained.</li>
            <li>User-Friendly Design: Our website is easy to navigate and optimized for a smooth reading experience.</li>
            <li>Regular Updates: We continuously update our content to ensure you never miss out on the latest trends and articles.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether you are a reader looking for insightful content or a writer eager to share your ideas, we invite you to join our growing community.
            Together, we can create an engaging and informative platform that makes knowledge sharing more efficient and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
