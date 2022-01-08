import { useEffect, useState, useCallback } from "react";
import { getPosts } from "../api/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPostsFromAPI = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await getPosts();
      setPosts(resp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getPostsFromAPI();
  }, [getPostsFromAPI]);

  return (
    <>
      {loading ? (
        <>
          <Skeleton count={10} />
        </>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post.id}>
              <span>Title: {post.title}</span>
              <br />
              <span>Body: {post.body}</span>
              <hr key={post.id} />
            </div>
          ))}
        </>
      )}
    </>
  );
};
