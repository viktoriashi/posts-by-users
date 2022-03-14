import { useState, useEffect } from "react";
import { IPost } from "./components/Router/Router";

const usePosts = () => {
  const [items, setItems] = useState<IPost[]>([]);
  const [errorPosts, setError] = useState(null);
  const [isLoadedPosts, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return {items, errorPosts, isLoadedPosts};
};

export default usePosts;