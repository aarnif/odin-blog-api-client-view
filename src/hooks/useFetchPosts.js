import blogService from "../services/blogService";
import { useState, useEffect } from "react";

const useFetchPosts = (searchBy, sortBy) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogService.getAllPosts(searchBy, sortBy).then((posts) => {
      console.log("Setting posts in useFetchPosts:");
      setPosts(posts);
      setLoading(false);
    });
  }, [searchBy, sortBy]);

  return { posts, setPosts, loading };
};

export default useFetchPosts;
