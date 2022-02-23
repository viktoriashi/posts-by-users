import { useState, useEffect } from "react";
import { IPost } from "./App";

const usePosts = (url: string) => {
  const [items, setItems] = useState<IPost[]>([]);
  const [errorPosts, setError] = useState(null);
  const [isLoadedPosts, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
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