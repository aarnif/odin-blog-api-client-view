import blogService from "../services/blogService";
import { useState, useEffect } from "react";

const useFetchPosts = (sortBy) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogService.getAllPosts(sortBy).then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return { posts, loading };
};

export default useFetchPosts;
