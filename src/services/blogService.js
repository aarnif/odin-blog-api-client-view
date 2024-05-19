import axios from "axios";
const baseUrl = "http://localhost:5000/api";

const getAllPosts = async () => {
  const response = await axios.get(`${baseUrl}/posts`);
  return response.data;
};

export default { getAllPosts };
