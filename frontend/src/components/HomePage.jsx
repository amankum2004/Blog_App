// import  { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/posts/post")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="max-w-4xl mx-auto px-4">
//         <header className="flex justify-between items-center border-b pb-4 mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
//           <Link
//             to="/create"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//           >
//             Create New Post
//           </Link>
//         </header>
//         <ul className="space-y-6">
//           {posts.map((post) => (
//             <li
//               key={post._id}
//               className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
//               <p className="text-gray-600 mt-2">{post.summary}</p>
//               <div className="mt-4">
//                 <Link
//                   to={`/post/${post._id}`}
//                   className="text-blue-500 hover:underline font-medium"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/post")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
          <Link
            to="/create"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create New Post
          </Link>
        </header>
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.summary}</p>
              <div className="mt-4">
                <Link
                  to={`/post/${post._id}`}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
