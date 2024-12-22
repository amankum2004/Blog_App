import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/post/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/posts/post/${id}`)
      .then(() => navigate("/"),Swal.fire({title: "Success", text: "Blog deleted succesfully", icon: "success" }))
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{post.content}</p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
