import axios from "axios";
import baseUrl from "../baseUrl";

const getAllPosts = async (searchBy = "", sortBy = "createdAt") => {
  const response = await axios.get(
    `${baseUrl}/posts?search=${searchBy}&sort=${sortBy}`
  );
  return response.data;
};

const addComment = async (postId, newComment) => {
  const response = await axios.post(
    `${baseUrl}/posts/${postId}/comments`,
    newComment
  );
  return response.data;
};

const likePost = async (postId) => {
  const response = await axios.put(`${baseUrl}/posts/${postId}/like`);
  return response.data;
};

export default { getAllPosts, addComment, likePost };
