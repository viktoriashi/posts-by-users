import { useState, useEffect } from "react";
import { IPost } from "./components/Router/Router";

const usePosts = (postId: number) => {
  const [post, setPost] = useState<IPost>();
  const [errorPost, setError] = useState(null);
  const [isLoadedPost, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPost(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return {post, errorPost, isLoadedPost};
};

export default usePosts;