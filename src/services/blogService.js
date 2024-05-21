import axios from "axios";
const baseUrl = "http://localhost:5000/api";

const getAllPosts = async (sortBy = "createdAt") => {
  const response = await axios.get(`${baseUrl}/posts?sort=${sortBy}`);
  return response.data;
};

const addComment = async (postId, newComment) => {
  const response = await axios.post(
    `${baseUrl}/posts/${postId}/comments`,
    newComment
  );
  return response.data;
};

export default { getAllPosts, addComment };
