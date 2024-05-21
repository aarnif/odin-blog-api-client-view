import blogService from "../services/blogService";
import { useState, useEffect } from "react";

const useFetchPosts = (sortBy) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogService.getAllPosts(sortBy).then((posts) => {
      console.log("Setting posts in useFetchPosts:");
      setPosts(posts);
      setLoading(false);
    });
  }, [sortBy]);

  return { posts, loading };
};

export default useFetchPosts;
